import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './blog.css';

interface BlogProps {
}

const Blog: React.FC<BlogProps> = () => {

    const [newsMonth, setNewsMonth] = useState("June2024");
    const { t } = useTranslation();

    return (
        <div className="blog-body">
            <div className='newsletter-container'>
                <div className='newsletter-body'>
                    <div className='newsletter-header'>
                        <p className='blog-title'>{t("BLOG")}</p>
                        <p className='blog-description'>{t('Catch up with everything CSSA related')}</p>
                    </div>
                    <div className='newsletter-list'>
                        <label className='newsletter-option'>
                            <div className='service-name'>JUNE 2024</div>
                            <input type='radio' name='service' value='June2024' onChange={() => {setNewsMonth('June2024')}}/>
                        </label>
                        <label className='newsletter-option'>
                            <div className='service-name'>MARCH 2024</div>
                            <input type='radio' name='service' value='March2024' onChange={() => {setNewsMonth('March2024')}}/>
                        </label>
                    </div>
                </div>
                <div className='newsletter-content'>
                    <iframe 
                        title='newsletter' 
                        src={`/emails/${newsMonth}_Email.html`}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Blog;