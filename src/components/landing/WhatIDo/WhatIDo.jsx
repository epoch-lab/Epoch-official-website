import { useState } from 'react';
import './WhatIDo.css';
import LetterGlitch from '@/content/Backgrounds/LetterGlitch/LetterGlitch';

const WhatIDo = () => {
    const [expandedItem, setExpandedItem] = useState('frontend');

    const services = [
        {
            id: 'frontend',
            title: '前端工程师',
            description: '专注于使用React、Vue、Angular等现代前端框架构建用户界面，精通响应式设计和移动端适配，致力于前端性能优化和用户体验提升，确保应用程序在各种设备上都能提供流畅的交互体验。'
        },
        {
            id: 'backend',
            title: '后端工程师',
            description: '熟练掌握Node.js、Python、Java等后端技术栈，负责数据库设计和API开发，具备微服务架构设计和系统优化能力，确保后端服务的稳定性、安全性和高性能，为前端应用提供可靠的数据支持。'
        },
        {
            id: 'testing',
            title: '测试工程师',
            description: '专业从事自动化测试框架搭建，执行性能测试和压力测试，负责质量保证和缺陷管理，通过全面的测试策略确保软件产品的质量和稳定性，为项目交付提供可靠的质量保障。'
        }
    ];

    const toggleExpanded = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <section className="what-i-do-section flex flex-wrap gap-8">
            <div className="what-i-do-container">
                <h2 className="what-i-do-title">技术方向</h2>

                <div className="services-list">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`service-item ${expandedItem === service.id ? 'expanded' : ''}`}
                            onClick={() => toggleExpanded(service.id)}
                        >
                            <div className="service-header">
                                <span className="service-title">{service.title}</span>
                                <div className="service-chevron">
                                    {expandedItem === service.id ? '▲' : '▼'}
                                </div>
                            </div>

                            {expandedItem === service.id && (
                                <div className="service-content">
                                    <p className="service-description">
                                        {service.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden md:flex flex-1  flex-col justify-end items-end'>
               <div className='bg-white! h-4/5 ' >
               <LetterGlitch
                    glitchColors={['#5b21b6', '#5b21b6cc', '#5b21b699', '#5b21b666', '#5b21b633']}
                    className='bg-white!'
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={false}
                    smooth={true}
                />
               </div>
            </div>
        </section>
    );
};

export default WhatIDo;
