# Goyal Hospital Website Clone

A static HTML/CSS/JS clone of [goyalhospital.com](https://goyalhospital.com/) — the best orthopedic hospital in Jaipur.

## Pages

- **Home** (`index.html`) — Full homepage with hero, services, FAQ, contact form
- **About Us** (`about-us.html`) — Dr. Vinay Goyal profile and hospital info
- **Gallery** (`gallery.html`) — Photo gallery
- **Contact Us** (`contact-us.html`) — Contact details and appointment form
- **Career** (`career.html`) — Job opportunities and application form
- **Services** (`services/`) — 8 service pages (Arthroscopy, Back Pain, Knee Pain, etc.)

## Run Locally

Open `index.html` in a browser, or start a local server:

```bash
# Python
python3 -m http.server 8080

# Node.js (if npx available)
npx serve .
```

Then visit `http://localhost:8080`

## Structure

```
├── index.html
├── about-us.html
├── gallery.html
├── contact-us.html
├── career.html
├── css/style.css
├── js/main.js
├── assets/images/
└── services/
    ├── arthroscopy.html
    ├── back-pain.html
    ├── knee-pain.html
    ├── knee-replacement.html
    ├── fracture-treatment.html
    ├── joint-replacement.html
    ├── shoulder-pain.html
    └── sports-injury.html
```

## Notes

- Images are downloaded from the original website
- Appointment and career forms show a confirmation alert (no backend)
- Responsive design with mobile navigation
- FAQ accordion on homepage
