# FOSSHub Frontend

## Overview
FOSSHub is an open-source migration and contribution hub designed to help users transition from proprietary software to open-source alternatives and track their open-source contributions. The frontend is built using **React (Vite)** and styled with **Tailwind CSS**.

## Tech Stack
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **UI Components:** DaisyUI, ReactBits
- **State Management:** React Hooks
- **Animations:** Framer Motion (optional)
- **Routing:** React Router DOM
- **HTTP Requests:** Axios

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/FOSSHub.git
cd FOSSHub/frontend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run Development Server
```sh
npm run dev
```
> Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure
```
frontend/
│── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── hooks/           # Custom hooks
│   ├── context/         # Context providers (if any)
│   ├── routes/          # App routes
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Main app entry point
│   ├── main.jsx         # React entry file
│── public/              # Static public assets
│── index.html           # Main HTML file
│── tailwind.config.js   # Tailwind CSS configuration
│── package.json         # Project dependencies
│── README.md            # Documentation
```

## Features Implemented
- **Landing Page**
- **Navigation Bar** (Responsive, Mobile-friendly)
- **Migration Page** (Search proprietary software and find FOSS alternatives)
- **User Authentication UI** (Sign Up, Login pages - Backend integration pending)

## Upcoming Features
- Contribution tracking dashboard
- Leaderboards and gamification elements
- User profiles and badges
- Improved search and filtering for software migration

## Contributing
1. **Fork** the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a **Pull Request** and describe your changes.

## License
This project is licensed under the **MIT License**.

## Contact
For any queries or contributions, reach out via **[GitHub Issues](https://github.com/yourusername/FOSSHub/issues)**.