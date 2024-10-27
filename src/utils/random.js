export const randomChar = () => {
  const str = "qwertyuiopasdfghjklzcxvbnm";
  return str[Math.floor(Math.random() * str.length)];
};
