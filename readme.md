# React2 Learning Workspace

Workspace tracking initial React practice projects built with Vite.

---

## 📂 Repository Structure

```text
React2/
├── 01react/                     # First React project (Basic component & mount)
│   ├── public/                  # Public static assets
│   ├── src/                     # Source directory
│   │   ├── assets/              # Icons and SVGs
│   │   ├── components/          # Reusable components
│   │   │   └── Navbar.jsx       # Arrow function component
│   │   ├── App.css              # Component styling for App
│   │   ├── App.jsx              # Function component using React Fragment
│   │   ├── index.css            # Global reset and body layout styling
│   │   └── main.jsx             # Entry point mounting Navbar to #root
│   ├── index.html               # Single page HTML container with #root div
│   ├── package.json             # React 19 + Vite dependencies
│   └── vite.config.js           # Vite configuration
│
├── 02comps-props-jsx/           # Second React project (Components, Props & JSX practice)
│   ├── public/                  # Static assets
│   ├── src/                     # Source directory (Vite template setup)
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── notes.md                     # Conceptual study notes strictly covering implemented topics
└── readme.md                    # Workspace guide and project overview
```

---

## 🛠️ How to Run the Projects

### Running `01react`
```bash
cd 01react
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the rendered `<Navbar />` component.

### Running `02comps-props-jsx`
```bash
cd 02comps-props-jsx
npm install
npm run dev
```

---

## 🌟 What Is Currently Done

### In `01react`:
- **Root Mounting (`main.jsx`)**: Initialized React DOM root via `createRoot` and rendered `<Navbar />` directly into `#root`.
- **Component Creation**:
  - **[Navbar.jsx](file:///c:/Personal/Code/React2/01react/src/components/Navbar.jsx)**: Arrow function component returning nested JSX (`I am Navbar!`).
  - **[App.jsx](file:///c:/Personal/Code/React2/01react/src/App.jsx)**: Functional component demonstrating React Fragments (`<>...</>`) and text rendering.
- **Styling**:
  - **[index.css](file:///c:/Personal/Code/React2/01react/src/index.css)**: Global CSS reset (`*`) and flexbox centering layout on `body`.
  - **[App.css](file:///c:/Personal/Code/React2/01react/src/App.css)**: Component-specific font size styling.

### In `02comps-props-jsx`:
- Initialized clean project structure ready for component, props, and JSX exercises.

---

## 📖 Related Documents

- **[notes.md](file:///c:/Personal/Code/React2/notes.md)**: Detailed conceptual breakdown of everything implemented so far.
