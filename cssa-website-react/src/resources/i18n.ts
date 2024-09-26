import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Computer Science Students Association": "Computer Science Students Association",
      "SWING BY OUR OFFICE": "SWING BY OUR OFFICE",
      "AT": "AT",
      "MEET THE TEAM": "MEET THE TEAM",
      "The CSSA is student elected student organization dedicated to advocating for Computer Science Students at the University of Ottawa.":"The CSSA is student elected student organization dedicated to advocating for Computer Science Students at the University of Ottawa.",
      "Check out some of our members below.": "Check out some of our members below.",
      "Learn More": "Learn More",
      "COME VISIT": "COME VISIT",
      "SOME OF OUR": "SOME OF OUR",
      "EVENTS": "EVENTS",
      "GET INVOLVED": "GET INVOLVED",
      "WITH CSSA": "WITH CSSA",
    }
  },
  fr: {
    translation: {
      "Computer Science Students Association": "Bonjour, je m'appelle Tara",
      "welcome": "Bienvenue sur mon portfolio"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
