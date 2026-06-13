export const capitalizeText = (text: string): string => {
  if (!text) return '';
  const trimmedText = text.trim().replace(/\s+/g, ' ');
  return trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1).toLowerCase();
};
