# 🥗 Recipe Finder - A Modern React Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/react-^18.2.0-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TheMealDB API](https://img.shields.io/badge/API-TheMealDB-orange.svg)](https://www.themealdb.com/api.php)

A beautiful and modern web application to **search**, **view**, and **save your favorite recipes**. Built with **React**, **Vite**, and **Tailwind CSS**, this project delivers a clean user experience with responsive design.

---

## ✨ Interface

*(Example interface of the application)*

![Recipe Finder Demo](img/demo.png)

---

## 📑 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage & Screenshots](#usage--screenshots)
- [Configuration](#configuration)
- [Styling & Fonts](#styling--fonts)
- [Resources](#resources)
- [License](#license)

---

## 📖 About The Project

The **Recipe Finder** was developed as a learning project to practice **React + Vite** fundamentals along with state management, API integration, and **Tailwind CSS styling**.  
It uses the free [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipes by keyword and provides a way to **save favorites locally** using `localStorage`.

---

## 🔑 Key Features

- 🔎 **Search Recipes:** Find recipes by name using TheMealDB API (no API key required).
- 📖 **Detailed View:** Get recipe image, category, instructions, and parsed ingredients list.
- ❤️ **Favorites:** Save and remove recipes as favorites, synced across browser tabs with localStorage.
- 📱 **Responsive UI:** Clean, mobile-friendly interface styled with Tailwind CSS.
- ⚡ **SPA Navigation:** Fast and seamless routing powered by React Router.

---

## 🛠 Technology Stack

| Area | Technologies |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-%23CA4245.svg?logo=react-router&logoColor=white) |
| **API** | [TheMealDB](https://www.themealdb.com/api.php) |
| **State & Storage** | React Context API, localStorage |

---

## 📁 Project Structure

```
recipe-finder/
├── public/
├── src/
│ ├── components/ # SearchBar.jsx, RecipeList.jsx, RecipeCard.jsx
│ ├── context/ # FavoritesContext.jsx (global state)
│ ├── pages/ # Home.jsx, RecipeDetail.jsx, FavoritesPage.jsx
│ ├── App.jsx # App-level routes/layout
│ ├── main.jsx # Entry point
│ └── index.css # Tailwind imports & custom global styles
├── .env # (optional) custom API base
├── package.json
└── vite.config.js

```


---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+  
- npm or yarn or pnpm

### Setup

1. **Clone the repo**

```bash
git clone https://github.com/YOUR_USERNAME/recipe-finder.git
cd recipe-finder
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Now open: http://localhost:5173
```
📸 Usage & Screenshots

Once the app is running, you can explore its core functionality:

🏠 Home Page

Search for recipes using the search bar and browse through the results.

📖 Recipe Detail Page

Click on any recipe card to view details: image, category, instructions, and ingredients list.

❤️ Favorites Section

Save recipes as favorites using the heart button. They appear under My Favorites and remain stored even after refreshing.
```

```
⚙️ Configuration

By default, the app fetches from:

https://www.themealdb.com/api/json/v1/1


Optionally, you can set a custom base URL in an .env file:

VITE_API_BASE=https://www.themealdb.com/api/json/v1/1


In your code, use:
```
const API_BASE = import.meta.env.VITE_API_BASE || 'https://www.themealdb.com/api/json/v1/1';
```
🎨 Styling & Fonts

Tailwind CSS is used for styling.


📚 Resources

TheMealDB API Docs

Tailwind CSS Docs

Vite Documentation

React Router Docs

📜 License

MIT License © Avanish


---