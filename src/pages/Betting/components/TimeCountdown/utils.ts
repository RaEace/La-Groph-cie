import { DateElement } from "./types";

export function getDateElements(futureDate: Date): DateElement {
    const currentDate = new Date();
    const timeDiff = futureDate.getTime() - currentDate.getTime();
  
    // Calculate the time difference in milliseconds
    const milliseconds = Math.abs(timeDiff);
  
    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }