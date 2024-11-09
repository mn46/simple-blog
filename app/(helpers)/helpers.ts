export const parseDateString = (dateString: string): string => {
  const newDate = new Date(dateString);
  return newDate.toLocaleDateString({
    day: "2-digit",
    month: "2-digit",
    year: "4-digit",
  });
};
