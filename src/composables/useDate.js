export default function useDate() {
  const DATE = new Date();
  
  const currentDate = {
    date: DATE.getDate() < 10 ? `0${DATE.getDate()}` : DATE.getDate(),
    month: DATE.getMonth() < 10 ? `0${DATE.getMonth() + 1}` : DATE.getMonth() + 1,
    year: DATE.getFullYear(),
  };

  return currentDate;
}