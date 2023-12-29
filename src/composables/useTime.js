export default function useTime() {
  const DATE = new Date();
  
  const currentTime = {
    hours: DATE.getHours() < 10 ? `0${DATE.getHours()}` : DATE.getHours(),
    minutes: DATE.getMinutes() < 10 ? `0${DATE.getMinutes()}` : DATE.getMinutes(),
    seconds: DATE.getSeconds() < 10 ? `0${DATE.getSeconds()}` : DATE.getSeconds(),
  };

  return currentTime;
}