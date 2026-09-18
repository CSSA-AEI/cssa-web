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
            question: t('How do I register?'),
            answer: 
            <>
                {t('Complete the')} <a href="https://your-registration-link.com" className="registration-form-link">{t('registration form')}</a> {t(' to pre-order your 101 Week kit and reserve your spot! Purchasing a kit is required to participate in 101 Week.')}
                <p>
                    {t('Our kits are limited and are distributed on a first-come, first-served basis. Ordering online is the best way to reserve your spot for an unforgettable start of your first year.')}
                </p>
                <p>
                    {t('Kits must be picked up in person. Swing by our booth in front of the STEM building on Saturday, September 5th (9:30 am - 5:00 pm) or Sunday, September 6th (9:30 am - 2:00 pm) to collect yours.')}
                </p>
            </>
        },
        {
            question: t('When is 101 Week?'),
            answer: t('101 Week runs every day from Saturday, September 5th, 2026 through Saturday, September 12th, 2026. Kits can be purchased or picked up (if reserved) at our Kit Sales event in front of STEM on Saturday (9:30 am - 5:00 pm) and Sunday (9:30 am - 2:00 pm).')
        },
        {
            question: t('Where is 101 Week?'),
            answer: t("While our events will take you all across Ottawa, our headquarters is located on the University of Ottawa campus. For your safety and convenience, round-trip transportation will be provided for all off-campus events.")
        },
        {
            question: t('Who can participate?'),
            answer: t('Participation is open to all incoming first-year undergraduate students at the University of Ottawa. Even if you are not enrolled in a computer science program, you are more than welcome to purchase a kit and engage in the festivities!'),
        },
        {
            question: t("Where can I find additional information and updates?"),
            answer: (
                <>
                    {t('To connect with your future classmates, ask questions, stay up to date on 101 Week events, and receive important announcements throughout the week, join the')} <a href="https://discord.gg/MyvZsf9s53" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{t('CSSA Community Discord server')}</a>{t('!')}

                    <p> 
                        {t('For the most comprehensive itinerary, including event locations, descriptions, and catering details, refer to our schedule on')} <a href="https://uevents.ca" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">uEvents</a>{t('. Available online or through the iOS App Store.')}
                    </p>

                    <p className="mb-4">
                        {t('Want to stay connected all year long? To catch our latest event photos and biggest announcements, be sure to follow us on')} <a href="https://instagram.com/cssa.aei" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Instagram (@cssa.aei)</a>{t('.')}
                    </p>
                </>
            ),
        },
        {
            question: t('Why is the 101 Week kit offered at a discounted rate?'),
            answer: t('The Computer Science Student Association heavily subsidizes the cost of each kit to ensure our events remain accessible to all students. For the $90 sale price, you receive over $90 worth of premium, limited-edition merch and admission to over $150 worth of unforgettable 101 Week events!'),
        },
        {
            question: t('Do I have to go to every 101 Week event?'),
            answer: t('While we strongly encourage participating in as many activities as your schedule allows to maximize your orientation experience, there is no mandatory obligation to attend every event. We also incentivize participation by rewarding you with bottle caps for each event you attend, which can be traded in for exclusive prizes at the end of the week!')
        },
        {
            question: t('Am I registered under the CSSA?'),
            answer: t('The CSSA represents all undergraduate students enrolled in computer science at the University of Ottawa. This includes computer science majors and minors, along with students in the Data Science (B.Sc. Mathematics and B.Sc. Computer Science) and Joint Honours (B.Sc. Computer Science and Mathematics) programs.')
        },
        {
            question: t('Is a minimum age to participate?'),
            answer: t('There is no minimum age requirement to participate in 101 Week. However, attendees must be over the age of 18 to attend an event where alcohol is served.')
        },
        {
            question: t('Will meals and refreshments be provided?'),
            answer: 
            <>
                {t('Catering and refreshments will be provided at select events throughout the week.')}
                <p>
                    {t('Please refer to our schedule on')} <a href="https://uevents.ca" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">uEvents</a> {t(', where complimentary meals and snacks will be denoted. We will always have food to accommodate food restrictions and allergies.')}
                </p>
            </>

        },
        {
            question: t("Is there anything I'm not allowed to bring?"),
            answer: t('The possession of weapons, drugs, alcohol, or any illegal substances is strictly prohibited at all 101 Week events. Additionally, select off-campus venues may enforce their own bag policies.')
        },
        
        {
            question:t("What resources are available for Indigenous students during 101 Week?"),
            answer: t(`All Indigenous students at uOttawa are represented by the Indigenous Students’ Association (ISA)! They have offered to cover the cost of your kit to alleviate any financial burden that buying the kit could cause (please note this is only available to First Nations, Metis, and Inuit students). Reach out to them via email at isa.uofo@gmail.com with the subject line “101 Week Kit Reimbursement” or send them a message on Instagram @isa.uottawa and they will reach out with more details!`)
        },
        
        {
            question: t("Who can I contact if I have further questions?"),
            answer: t("If you require further clarification or have a specific inquiry not addressed in this FAQ, please do not hesitate to contact our executive team at exec@cssa-aei.ca. A representative will review your message and respond as soon as possible.")
        }
    ];

    return (
        <div className="frosh-week-page-container">
            <BinaryBackground />
            <div className="frosh-week-main">
                <div className="frosh-week-header">{t('Join Us for 101 Week!')}</div>
                <div className="frosh-week-description">
                    <p>{t('The Computer Science Student Association (CSSA)\'s 101 Week Kit is your one-way ticket to the best week of your university career!')}</p>
                    <p>{t("From September 5th to 12th, 2026, 101 Week is your chance to explore campus, make lifelong friends, and create unforgettable memories, all while celebrating the start of your uOttawa journey with our biggest-ever lineup of frosh events!")}</p>
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