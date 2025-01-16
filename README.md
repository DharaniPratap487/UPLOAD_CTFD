# ![](https://github.com/CTFd/CTFd/blob/master/CTFd/themes/core/static/img/logo.png?raw=true)

![CTFd MySQL CI](https://github.com/CTFd/CTFd/workflows/CTFd%20MySQL%20CI/badge.svg?branch=master)
![Linting](https://github.com/CTFd/CTFd/workflows/Linting/badge.svg?branch=master)
[![MajorLeagueCyber Discourse](https://img.shields.io/discourse/status?server=https%3A%2F%2Fcommunity.majorleaguecyber.org%2F)](https://community.majorleaguecyber.org/)
[![Documentation Status](https://api.netlify.com/api/v1/badges/6d10883a-77bb-45c1-a003-22ce1284190e/deploy-status)](https://docs.ctfd.io)

## What is CTFd?

CTFd is a Capture The Flag framework focusing on ease of use and customizability. It comes with everything you need to run a CTF and it's easy to customize with plugins and themes.

This project has been customized to host the **ODU Cyber Competition 2025**, with a focus on branding, event features, and a user-friendly countdown timer.

---

## Features

- **ODU Cyber Competition 2025:**
  - Integrated branding (logo, colors, and university name).
  - Countdown timer for the event start date.
  - Dedicated menu item in the navbar for event details.

- Create your own challenges, categories, hints, and flags from the Admin Interface:
  - Dynamic Scoring Challenges
  - Unlockable challenge support
  - Challenge plugin architecture to create your own custom challenges
  - Static & Regex-based flags
  - File uploads to the server or an Amazon S3-compatible backend
  - Limit challenge attempts & hide challenges
  - Automatic bruteforce protection
- Individual and Team-based competitions:
  - Allow users to play individually or form teams.
- Scoreboard with automatic tie resolution:
  - Hide Scores from the public.
  - Freeze Scores at a specific time.
- Markdown content management system.
- SMTP + Mailgun email support:
  - Email confirmation support.
  - Forgot password support.
- Automatic competition starting and ending.
- Plugin and Theme interfaces for full customization.
- Importing and Exporting of CTF data for archival.

---

## Customizations

The following customizations have been added for **ODU Cyber Competition 2025**:
1. **Branding:**
   - Updated the landing page to reflect Old Dominion University's logo, colors, and name.
2. **Countdown Timer:**
   - A real-time countdown timer for the event start date has been integrated into the landing page.
3. **Navbar Updates:**
   - Added a new menu item linking to the ODU Cyber Competition 2025 page.
4. **Responsive Design:**
   - Ensured compatibility with mobile, tablet, and desktop devices.
5. **Accessibility:**
   - High-contrast color schemes and ARIA attributes added to improve accessibility.

---

## Installation

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
   You can also use the `prepare.sh` script to install system dependencies using apt.

2. Modify configurations in `.env` (or `config.ini` if applicable).

3. Initialize the database:
   ```bash
   flask db upgrade
   ```

4. Start the server:
   ```bash
   flask run
   ```
   Access the application at `http://127.0.0.1:8000`.

---

## Deployment

### **Local Deployment**
1. Follow the installation steps above.
2. Test locally to ensure branding, countdown timer, and all functionalities work as expected.

### **AWS Deployment**
1. Launch an EC2 instance with Docker installed.
2. Use `docker-compose` to deploy:
   ```bash
   docker-compose up --build
   ```
3. Access the application at your public EC2 instance's IP address.

---

## Live Demo

If deployed, provide the live demo link:
- [Live Demo (Optional)]()

---

## Support

For support related to CTFd, visit the [MajorLeagueCyber Community](https://community.majorleaguecyber.org/).

---

## Managed Hosting

Looking to use CTFd but don't want to deal with managing infrastructure? Check out [the CTFd website](https://ctfd.io/) for managed CTFd deployments.

---

## MajorLeagueCyber

CTFd is heavily integrated with [MajorLeagueCyber](https://majorleaguecyber.org/). MajorLeagueCyber (MLC) is a CTF stats tracker that provides event scheduling, team tracking, and single sign-on for events.

---

## Credits

- Logo by [Laura Barbera](http://www.laurabb.com/)
- Theme by [Christopher Thompson](https://github.com/breadchris)
- Notification Sound by [Terrence Martin](https://soundcloud.com/tj-martin-composer)

---

### **Notes**
- If hosting on AWS, replace the placeholder under "Live Demo" with the actual public link.
- Update the README if additional features are added.

Let me know if you need further assistance! 😊