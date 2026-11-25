import React from 'react';
import BinaryBackground from '../../components/Background/BinaryBackground';
import './sponsors.css';
import { useTranslation } from 'react-i18next';

import sponsor1 from '../../images/2026-101-week/2026-101-week-sponsor-QNX.webp';
import sponsor2 from '../../images/2026-101-week/2026-101-week-sponsor-CSE.webp';
import sponsor3 from '../../images/2026-101-week/2026-101-week-sponsor-ciena.webp';

type Sponsor = {
    name: string;
    logo: string;
    subtitle?: string;
    description?: string;
};

const Sponsors: React.FC = () => {
    const { t } = useTranslation();

const goldSponsors: Sponsor[] = [
        {
            name: 'QNX',
            logo: sponsor1,
            subtitle: t('Gold Partner for the 2026-2027 Academic Year'),
            description: t("QNX is a division of BlackBerry, headquartered in Kanata, ON. They work in real-time operating systems and embedded software, meaning that they build the reliable foundation for various complex systems we all use on a daily basis such as vehicles, medical devices, and commercial transportation.")
        }
    ];

    const silverSponsors: Sponsor[] = [
        {
            name: t('Communications Security Establishment Canada'),
            logo: sponsor2,
            subtitle: t('Silver Partner for the 2026-2027 Academic Year'),
            description: t("The Communications Security Establishment Canada (CSE) is the national cryptologic agency, providing the Government of Canada with information technology security and foreign signals intelligence.")
        },
        {
            name: 'Ciena',
            logo: sponsor3,
            subtitle: t('Silver Partner for the 2026-2027 Academic Year'),
            description: t("Ciena is a distinctive private company headquartered in Maryland, USA. They specialize in building the optical networking that moves data between the world's data centers, especially crucial in this AI era.")
        }
    ];

    return (
        <div className={`sponsors-page-container`}>
            <BinaryBackground />
            <div className="sponsors-container">
                <div className="sponsors-title">{t('Our Partners')}</div>
                <div className="sponsors-card-container gold-tier">
                    {goldSponsors.map((sponsor) => (
                        <article className="sponsor-card gold-tier" key={sponsor.name}>
                                <div className="sponsor-logo-container">
                                    <img src={sponsor.logo} alt={sponsor.name} />
                                </div>
                                <div className="sponsor-text">
                                    <h3>{sponsor.name}</h3>
                                    {sponsor.subtitle && <p className="sponsor-subtitle">{sponsor.subtitle}</p>}
                                    {sponsor.description && <p className="sponsor-description">{sponsor.description}</p>}
                                </div>
                        </article>
                    ))}
                </div>

                <div className="sponsors-container silver-tier">
                    {silverSponsors.map((sponsor) => (
                        <article className="sponsor-card silver-tier" key={sponsor.name}>
                            <div className="sponsor-logo-container">
                                <img src={sponsor.logo} alt={sponsor.name} />
                            </div>
                            <div className="sponsor-text">
                                <h3>{sponsor.name}</h3>
                                {sponsor.subtitle && <p className="sponsor-subtitle">{sponsor.subtitle}</p>}
                                {sponsor.description && <p className="sponsor-description">{sponsor.description}</p>}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
   );
};

export default Sponsors;