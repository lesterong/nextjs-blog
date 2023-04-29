export const toTitleCase = (text: string) => {
  return text
    .split(' ')
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
};
