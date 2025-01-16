import CTFd from "../CTFd";
import $ from "jquery";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import nunjucks from "nunjucks";
import { Howl } from "howler";
import events from "../events";
import config from "../config";
import styles from "../styles";
import times from "../times";
import { default as helpers } from "../helpers";

dayjs.extend(advancedFormat);

CTFd.init(window.init);
window.CTFd = CTFd;
window.helpers = helpers;
window.$ = $;
window.dayjs = dayjs;
window.nunjucks = nunjucks;
window.Howl = Howl;

// Countdown Timer Logic
$(() => {
  const eventDate = new Date("2025-01-17T00:00:00").getTime(); // Event date
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Check if the event has passed
    if (distance < 0) {
      countdownElement.innerText = "Event Started!";
      clearInterval(timerInterval);
      return;
    }

    // Calculate time remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Update every second
  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call

  // Existing functionality
  styles();
  times();
  events(config.urlRoot);
});
