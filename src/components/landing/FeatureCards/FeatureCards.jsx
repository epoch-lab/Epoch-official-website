import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './FeatureCards.css';
import CountUp from '../../../content/TextAnimations/CountUp/CountUp';

const ParticleCard = ({ children, className = '', disableAnimations = false }) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInit = useRef(false);

  const createParticle = useCallback((x, y) => {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `
      position:absolute;width:4px;height:4px;border-radius:50%;
      background:rgba(132,0,255,1);box-shadow:0 0 6px rgba(132,0,255,.6);
      pointer-events:none;z-index:100;left:${x}px;top:${y}px;
    `;
    return el;
  }, []);

  const memoizeParticles = useCallback(() => {
    if (particlesInit.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    Array.from({ length: 12 }).forEach(() => {
      memoizedParticles.current.push(createParticle(Math.random() * width, Math.random() * height));
    });
    particlesInit.current = true;
  }, [createParticle]);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach(p =>
      gsap.to(p, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => p.parentNode && p.parentNode.removeChild(p)
      })
    );
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInit.current) memoizeParticles();

    memoizedParticles.current.forEach((particle, i) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.set(clone, { scale: 0, opacity: 0 });
        gsap.to(clone, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
      }, i * 100);
      timeoutsRef.current.push(id);
    });
  }, [memoizeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const handleIn = () => {
      isHoveredRef.current = true;
      animateParticles();
    };
    const handleOut = () => {
      isHoveredRef.current = false;
      clearParticles();
    };

    const node = cardRef.current;
    node.addEventListener('mouseenter', handleIn);
    node.addEventListener('mouseleave', handleOut);
    return () => {
      isHoveredRef.current = false;
      node.removeEventListener('mouseenter', handleIn);
      node.removeEventListener('mouseleave', handleOut);
      clearParticles();
    };
  }, [animateParticles, clearParticles, disableAnimations]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({ gridRef, disableAnimations = false }) => {
  const spotlightRef = useRef(null);
  const isInsideSectionRef = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position:fixed;width:800px;height:800px;border-radius:50%;pointer-events:none;
      background:radial-gradient(circle,rgba(132,0,255,.15) 0%,rgba(132,0,255,.08) 15%,
      rgba(132,0,255,.04) 25%,rgba(132,0,255,.02) 40%,rgba(132,0,255,.01) 65%,transparent 70%);
      z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const move = e => {
      if (!spotlightRef.current || !gridRef.current) return;
      const section = gridRef.current.closest('.features-section');
      const rect = section?.getBoundingClientRect();
      const inside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSectionRef.current = inside;
      const cards = gridRef.current.querySelectorAll('.feature-card');

      if (!inside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
        cards.forEach(card => card.style.setProperty('--glow-intensity', '0'));
        return;
      }

      let minDist = Infinity;
      const prox = 100,
        fade = 150;
      cards.forEach(card => {
        const r = card.getBoundingClientRect(),
          cx = r.left + r.width / 2,
          cy = r.top + r.height / 2,
          d = Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(r.width, r.height) / 2,
          ed = Math.max(0, d);
        minDist = Math.min(minDist, ed);

        const rx = ((e.clientX - r.left) / r.width) * 100,
          ry = ((e.clientY - r.top) / r.height) * 100;
        let glow = 0;
        if (ed <= prox) glow = 1;
        else if (ed <= fade) glow = (fade - ed) / (fade - prox);
        card.style.setProperty('--glow-x', `${rx}%`);
        card.style.setProperty('--glow-y', `${ry}%`);
        card.style.setProperty('--glow-intensity', glow);
      });

      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
      const target = minDist <= prox ? 0.8 : minDist <= fade ? ((fade - minDist) / (fade - prox)) * 0.8 : 0;
      gsap.to(spotlightRef.current, { opacity: target, duration: target > 0 ? 0.2 : 0.5, ease: 'power2.out' });
    };

    const leave = () => {
      isInsideSectionRef.current = false;
      gridRef.current
        ?.querySelectorAll('.feature-card')
        .forEach(card => card.style.setProperty('--glow-intensity', '0'));
      gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations]);

  return null;
};

const FeatureCards = () => {
  const [isMobile, setIsMobile] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="features-section">
      <div className="features-container">

        <div className="bento-grid" ref={gridRef}>

          <ParticleCard className="feature-card card1" disableAnimations={isMobile}>
            <h2 className='mb-4! '>Careers</h2>
            <h3>从这里起航</h3>
            <p>聚是一团火，散是满天星。实验室成员广泛就职于国内外知名科技企业，包括：腾讯、阿里巴巴、字节跳动、美团、滴滴、贝壳、零跑、安恒信息、青云科技以及小黑盒等行业领军企业。我们从这里起航，奔赴下一段旅程！</p>
          </ParticleCard>

          <ParticleCard className="feature-card card2" disableAnimations={isMobile}>
            <h2 className='mb-4!'>Epoch</h2>
            <h3>关于我们</h3>
            <p className='mb-1!'>回声实验室创立于2011年，隶属于计算机学院，是一个完全由在校大学生自主运营的项目研发与技术实践团队。我们专注于Web前后端开发、测试等领域，致力于打造一个开放、共享、互助的技术学习与创新社区。</p>
            
            <p className='mb-1!'>实验室拥有沉浸式的学习空间、前沿技术资源和极富创造力的技术社区。不论你的专业背景，只要你对技术充满好奇，渴望在实践中成长，回声都诚挚的欢迎你的加入。</p>
            
            <p className='mb-1!'>在这里，有前辈为你指引方向，有同伴与你共同成长，有技术大牛与你并肩作战，有技术社区为你提供技术支持，有技术产品为你提供技术实践平台。我们期待与你一同，创建属于我们的回声！</p>

          </ParticleCard>

          <ParticleCard className="feature-card card4" disableAnimations={isMobile}>
            <h2 className='mb-4!'>{isMobile ? '200' : <CountUp to={200} />}+</h2>
            <h3>实验室成员</h3>
            <p>从 2011 年至今，共有200多名伙伴加入回声实验室，他们来自计算机学院、软件学院、网络空间安全学院...... 我们来自不同的专业，不同的年级，不同的地域，我们有着不同的经历，不同的梦想，但在这里在回声我们相互学习，一同成长，紧紧相依。</p>
          </ParticleCard>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
