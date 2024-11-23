export const parseDateString = (dateString: string): string => {
  const newDate = new Date(dateString);
  return newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
