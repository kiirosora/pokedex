export const dynamicImporter = (name, type) => {
  const path = `../assets/${type}/${name}.${type}`;
  try {
    const image = require(`../assets/${type}/${name}.${type}`);
    if (!image) return null;
    return image;
  } catch (error) {
    return path;
  }
};
