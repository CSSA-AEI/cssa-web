import React, { useState, useEffect } from 'react';
import './volunteer.css';
import BinaryBackground from '../../components/Background/BinaryBackground';
import { useTranslation } from 'react-i18next';

const Volunteer: React.FC = () => {
  const [description, setDescription] = useState({
    header: '101 WEEK',
    link: "https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/closedform",
    text: [
      "Hello computer science students! It's finally time:",
      "Guide applications for 2024 101 Week are now open!",
      "One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!",
      "Check out some pictures from past 101 Weeks below."
    ],
  });
  const { t } = useTranslation();

  const events = [
    {
      label: '101 WEEK GUIDE APPLICATION',
      link: "https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/closedform",
      onClick: () =>
        setDescription({
          header: '101 WEEK',
          link: "https://docs.google.com/forms/d/e/1FAIpQLScB4UU4UGIFrI9-8npt3WEHIF9deqTQg2sdDplnlUGcAE6rog/closedform",
          text: [
            "Hello computer science students! It's finally time:",
            "Guide applications for 2024 101 Week are now open!",
            "One of the most fun ways to participate in 101 Week other than being a 101er yourself is being a guide--getting involved with your fellow CS students is rewarding!",
            "Check out some pictures from past 101 Weeks below."
          ],
        }),
    },
    {
      label: 'BECOME A CSSA JUNIOR',
      link: "/volunteer",
      onClick: () =>
        setDescription({
          header: 'CSSA JUNIOR APPLICATION',
          link:"/volunteer",
          text: [
            "Are you a freshman looking to get involved with CSSA events?",
            "Juniors work with members of the CSSA Exec team to plan events and ensure the smooth running of the association.",
            "Apply to become a junior today!"
          ],
        }),
    },
  ];

  return (
    <div className="volunteer-body">
      <BinaryBackground />
      <div className="volunteer-events-container">
        <div className="volunteer-header">{t('VOLUNTEERING OPPORTUNITIES')}</div>
        {events.map((event, index) => (
          <div className="volunteer-event" key={index}>
            <a href={description.link}>
              <div className="volunteer-info">{t(event.label)}</div>
            </a>
            <button onClick={event.onClick}>i</button>
          </div>
        ))}
      </div>
      <div className="volunteer-description-container">
        <div className="volunteer-description">
          <div className="description-header">{t(description.header)}</div>
          <div className="description-details">
            {description.text.map((text, index) => (
              <p key={index}>{t(text)}</p>
            ))}
          </div>
        </div>
      </div>
      <img src="/images/VolunteerPage/volunteer-image.webp" alt="volunteering opportunities" />
    </div>
  );
};

export default Volunteer;
