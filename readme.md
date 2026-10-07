# React2 Learning Workspace

Workspace tracking React fundamentals, component patterns, state management, and props across progressive modular practice projects.

---

## 📂 Repository Structure

```text
React2/
├── 01react/                     # Module 1: React setup & basic component mounting
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx       # Arrow function component
│   │   ├── App.css
│   │   ├── App.jsx              # Standard function component with React Fragment
│   │   ├── index.css            # Global reset & layout
│   │   └── main.jsx             # createRoot mount to #root
│   ├── index.html
│   └── package.json
│
├── 02comps-props-jsx/           # Module 2: Components, Props, JSX & Assets
│   ├── src/
│   │   ├── assets/              # Image assets (Zoro.jpg, Mikey.jpg, Guts.jpg)
│   │   ├── components/
│   │   │   ├── UserCard.css     # Card styling
│   │   │   └── UserCard.jsx     # Reusable card component consuming props
│   │   ├── App.css              # Container layout
│   │   ├── App.jsx              # Parent rendering cards with props & asset imports
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 03usestate-hook/             # Module 3: State Management with useState
│   ├── src/
│   │   ├── components/
│   │   │   ├── Counter.css      # Counter button & container styling
│   │   │   └── Counter.jsx      # Counter component utilizing useState & onClick
│   │   ├── App.css
│   │   ├── App.jsx              # Renders Counter
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 04props-extra/               # Module 4: Advanced Props (Children & Functions)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.css
│   │   │   ├── Button.jsx       # Consumes props.children & callback prop (incrementCount)
│   │   │   ├── Card.css
│   │   │   └── Card.jsx         # Wrapper component rendering props.children
│   │   ├── App.css
│   │   ├── App.jsx              # Parent managing count state & passing handleClick function
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── notes.md                     # Comprehensive conceptual study notes for all 4 modules
└── readme.md                    # Workspace guide and module overview
```

---

## 🛠️ How to Run Any Module

To run any of the practice projects locally, change into its folder and start the Vite dev server:

```bash
# Example: Running Module 3 (useState)
cd 03usestate-hook
npm install
npm run dev

# Example: Running Module 4 (Advanced Props)
cd ../04props-extra
npm install
npm run dev
```

The app will run locally on `http://localhost:5173` (or the next available port).

---

## 🌟 Modules & Concepts Implemented

| Module | Core Topic | Key Files | Concepts Covered |
| :--- | :--- | :--- | :--- |
| **`01react`** | Setup & Mounting | [Navbar.jsx](file:///c:/Personal/Code/React2/01react/src/components/Navbar.jsx), [main.jsx](file:///c:/Personal/Code/React2/01react/src/main.jsx) | `createRoot`, DOM mounting, Arrow vs Function components, React Fragments (`<>...</>`), Global vs Component CSS. |
| **`02comps-props-jsx`** | Components & Props | [UserCard.jsx](file:///c:/Personal/Code/React2/02comps-props-jsx/src/components/UserCard.jsx), [App.jsx](file:///c:/Personal/Code/React2/02comps-props-jsx/src/App.jsx) | Unidirectional data flow, passing primitive props (`name`, `desc`), importing local image assets as props (`image`), passing inline style objects (`style={props.style}`). |
| **`03usestate-hook`** | State Management | [Counter.jsx](file:///c:/Personal/Code/React2/03usestate-hook/src/components/Counter.jsx), [App.jsx](file:///c:/Personal/Code/React2/03usestate-hook/src/App.jsx) | `useState` hook, initial state, updater function, state re-rendering, `onClick` event handling. |
| **`04props-extra`** | Advanced Props | [Button.jsx](file:///c:/Personal/Code/React2/04props-extra/src/components/Button.jsx), [Card.jsx](file:///c:/Personal/Code/React2/04props-extra/src/components/Card.jsx), [App.jsx](file:///c:/Personal/Code/React2/04props-extra/src/App.jsx) | **`props.children`** (wrapper pattern), **passing functions as props** (`incrementCount={handleClick}`), parent-child communication. |

---

## 📖 Related Documents

- **[notes.md](file:///c:/Personal/Code/React2/notes.md)**: In-depth explanations, code snippets, gotchas, and architectural walkthrough for all topics implemented across the 4 modules.
