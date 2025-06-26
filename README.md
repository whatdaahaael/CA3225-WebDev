# CA3225 Web Development Technologies

## Requirements
- Node.js (v16 or above recommended)
- npm or pnpm

## Setup Instructions

### 1. Clone the Repository
```
git clone https://github.com/whatdaahaael/CA3225-WebDev.git
cd CA3225-WebDev
```

### 2. Install Dependencies
Using npm:
```
npm install
```
Or using pnpm:
```
pnpm install
```

### 3. Run the Server with Nodemon
To serve the default file:
```
npm run dev
```

To serve a specific HTML file (e.g., `basic-profile-page/bpp.html`):
```
HTML_FILE=basic-profile-page/bpp.html npm run dev
```

Or add your own script in `package.json` for convenience.

### 4. View in Browser
Open [http://localhost:3000](http://localhost:3000) to see your profile page.

---

## Notes
- Edit your HTML file and refresh the browser to see changes.
- The server will auto-reload on file changes thanks to nodemon.
