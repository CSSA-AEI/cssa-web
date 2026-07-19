import React, { useState } from 'react';
import './frosh-week.css';
import BinaryBackground from '../../components/Background/BinaryBackground';
import { useTranslation } from 'react-i18next';

const FroshWeek: React.FC = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqItems = [
        {
            question: t('What is 101 Week?'),
            answer: t('101 Week is a welcoming event for new computer science students to meet peers, learn about campus life, and get involved with the CSSA.'),
        },
        {
            question: t('Who can participate?'),
            answer: t('All new computer science students are encouraged to join and take part in the activities and events.'),
        },
        {
            question: t('How do I register?'),
            answer: t('Use the registration link above to sign up for 101 Week and reserve your spot.'),
        },
    ];

    return (
        <div className="frosh-week-page-container">
            <BinaryBackground />
            <div className="frosh-week-main">
                <div className="frosh-week-header">{t('Join Us for 101 Week!')}</div>
                <div className="frosh-week-description">
                    <p>{t('101 Week is an exciting event for new computer science students to get involved with the CSSA and meet fellow students!')}</p>
                    <p>{t("Don't miss out on this amazing experience!")}</p>
                </div>

                <div className="form-link-container">
                    <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('Register for 101 Week')}
                    </a>
                </div>
            </div>

            <div className="frosh-week-faq-container">
                <div className="frosh-week-faq-header">{t('Frequently Asked Questions')}</div>

                {faqItems.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div className="frosh-week-faq-item" key={item.question}>
                            <button
                                type="button"
                                className="frosh-week-faq-question"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.question}</span>
                                <span className="frosh-week-faq-icon">{isOpen ? '−' : '+'}</span>
                            </button>
                            {isOpen && <p className="frosh-week-faq-answer">{item.answer}</p>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FroshWeek;