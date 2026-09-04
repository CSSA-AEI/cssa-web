import React, { useState } from 'react';
import './frosh-week.css';
import BinaryBackground from '../../components/Background/BinaryBackground';
import { useTranslation } from 'react-i18next';
import FroshCarousel from './FroshCarousel';

// Placeholder images for the carousel, upload new onesat new path
import image0 from '../../images/2026-101-week/2026-101-week-schedule-en.webp';
import image1 from '../../images/2026-101-week/2026-101-week-schedule-fr.webp';
import image2 from '../../images/2026-101-week/2026-101-week-kit-sales-en.webp';
import image3 from '../../images/2026-101-week/2026-101-week-kit-sales-fr.webp';

const FroshWeek: React.FC = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const froshImages = [
        image0,
        image1,
        image2,
        image3
    ];
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
        {
            question: t('Why are the kits so cheap?'),
            answer: t('The CSSA subsidizes the cost of each ticket! Meaning a value of over $150 for just $90!'),
        },
        {
            question: t('When is 101 Week?'),
            answer: t('We have events running every day from Sunday September 6th to Saturday September 12th.')
        },
        {
            question: t('Where is it?'),
            answer: t("Although our events will take you all over the city, our home base is infront of the stem building on uottawa's campus.")
        },
        {
            question: t('Do I have to go to every event?'),
            answer: t('We reccomend you come to as many events as you can but are not obligated to attend every event.')
        },
        {
            question: t('Am I under the CSSA?'),
            answer: t('The CSSA represent all students in the computer science program. This includes students in the Data Science and joint Honors programs.')
        },
        {
            question: t("Is there anything I'm not allowed to bring?"),
            answer: t('All drugs and alcohol are prohibited.')
        },
        {
            question: t('Is a minimum age to participate?'),
            answer: t('No!')
        },
        {
            question:t("Like I'm indigenous! What resources are there on campus for me during 101 Week?"),
            answer: t(`Reach out to the ISA (Indigenous Students' Association) at their email: isa.uofo@gmail.com or instagram: @isa.uottawa! They represent all Indigenous students on campus and will be happy to provide any necessary assitance. 
                They also have offered to cover the cost of your kit to alleviate any financial burden that buying the kit could cause (please note this is only available to First Nations, Metis, and Inuit students).
                Just email them with the subject line “101 Week kit reimbursement” or send them a message on Instagram to get more details`)
        },
        {
            question: t('Will food be provided?'),
            answer: t('Food will be provided at some but not all events, please check your schedule as events where we provide food will be indicated')
        },
        {
            question: t("Where can I find more information?"),
            answer: t("Check out our instagram @cssa.aei for more information")
        },
        {
            question: t("My question isn't here! Who can I ask?"),
            answer: t("Just reach out to exec@cssa-aei.ca with your question and we will get back to you as soon as we can")
        }
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
                        href="https://pci.jotform.com/form/261946674835068"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {t('Register for 101 Week')}
                    </a>
                </div>

                <div className="frosh-week-carousel-wrapper">
                    <FroshCarousel images={froshImages} />
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