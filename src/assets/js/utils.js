// Preload images
const preloadFonts = (id) => {
  return new Promise((resolve) => {
    this.WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { preloadFonts, randomNumber };
