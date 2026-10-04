# React2 Learning Workspace

Welcome to the **React2** workspace. This repository tracks React practice modules, component architecture experiments, and hands-on projects.

---

## 📂 Repository Structure

```text
React2/
├── DemoShopApp/                 # React + Vite application
│   ├── public/                  # Static public assets
│   ├── src/                     # Application source code
│   │   ├── assets/              # Icons and images
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Item.css         # Styles for Item
│   │   │   ├── Item.jsx         # Item component (receives props.name)
│   │   │   ├── ItemDate.css     # Styles for ItemDate
│   │   │   └── ItemDate.jsx     # ItemDate component (receives day, month, year)
│   │   ├── App.css              # Styling for main layout
│   │   ├── App.jsx              # Root component managing item list & props
│   │   ├── index.css            # Base stylesheet
│   │   └── main.jsx             # Entry point mounting React to DOM
│   ├── index.html               # Main HTML entry file
│   ├── package.json             # Dependencies and build scripts
│   └── vite.config.js           # Vite build configuration
├── notes.md                     # In-depth React study notes & cheat sheet
└── readme.md                    # Workspace overview and project guide
```

---

## 🛠️ Getting Started

To run the application locally:

### 1. Navigate to the project directory
```bash
cd DemoShopApp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The application will be live at `http://localhost:5173`.

---

## 🌟 Key Concepts Implemented

- **Component Creation & Composition**: Breaking the interface down into independent components ([Item.jsx](file:///c:/Personal/Code/React2/DemoShopApp/src/components/Item.jsx) and [ItemDate.jsx](file:///c:/Personal/Code/React2/DemoShopApp/src/components/ItemDate.jsx)) and composing them in [App.jsx](file:///c:/Personal/Code/React2/DemoShopApp/src/App.jsx).
- **JSX Fundamentals**: Returning clean markup, adhering to single-root rules, and using `className`.
- **Props (Data Passing)**:
  - Passing static values (`name="Nirma"`).
  - Passing dynamic variables (`name={itemTwoName}`).
  - Receiving and rendering multiple props (`day`, `month`, `year`).
- **Styling**: Component-level CSS isolation with imported stylesheets.

---

## 📖 Additional Resources

- **[Study Notes (notes.md)](file:///c:/Personal/Code/React2/notes.md)**: Full theoretical breakdown of React concepts, JSX rules, props, and architectural diagrams.
- **[DemoShopApp Source](file:///c:/Personal/Code/React2/DemoShopApp/src/)**: Source code directory for the shop demonstration app.
