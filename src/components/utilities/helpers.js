export const formatCurrency = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};
export const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};