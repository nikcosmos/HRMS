import en from './locales/en.json';
import ua from './locales/ua.json';

export default defineI18nConfig(() => ({
   fallbackLocale: 'ua',
   messages: {
      ua,
      en,
   },
}));
