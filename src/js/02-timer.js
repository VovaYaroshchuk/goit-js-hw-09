import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';

const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let timerId = null;
// startBtn.disabled = true;


const addLeadingZero = value => String(value).padStart(2, 0);
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates.length === 0) {
        return;
      };

      if (selectedDates[0] <= new Date()) {
        Report.failure(
            'Incorect date',
            '"Please choose a date in the future',
            'Okay',
            );
        this.setDate(new Date());
      } else {startBtn.disabled = false;};
      
      const startTimer = () => {
      const selectedDate = selectedDates[0];
      const now = new Date();
      const diff = selectedDate.getTime() - now.getTime();

        startBtn.disabled = false;
          const { days, hours, minutes, seconds } = convertMs(diff);
          daysRef.textContent = addLeadingZero(days);
          hoursRef.textContent = addLeadingZero(hours);
          minutesRef.textContent = addLeadingZero(minutes);
          secondsRef.textContent = addLeadingZero(seconds);

            if (
                daysRef.textContent === '00' &&
                hoursRef.textContent === '00' &&
                minutesRef.textContent === '00' &&
                secondsRef.textContent === '00'
              ) {
                clearInterval(timerId);
              }
        }

        const onClick = () => {
            if (timerId) {
                clearInterval(timerId);
              }
              timerId = setInterval(startTimer, 1000);
          };
          startBtn.addEventListener('click', onClick);
        },
    } 
  

  
flatpickr("#datetime-picker", options);

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  



