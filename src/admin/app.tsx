import fav from "./extensions/CartWise-fav.png";

const config = {
  head: {
    favicon: fav,
  },

  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "CartWise",

      "app.components.LeftMenu.navbrand.workplace": "by Paperfly Digital",

      "Auth.form.welcome.title": "Welcome to CartWise",

      "Auth.form.welcome.subtitle": "Login to your CartWise account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
