# React Learning Notes (DemoShopApp)

Comprehensive study notes and reference guide covering the fundamental concepts implemented in this source directory.

---

## 1. What is React?

- **Definition**: React is a declarative, component-based JavaScript library developed by Facebook/Meta for building user interfaces (UIs).
- **Core Principles**:
  - **Component-Based Architecture**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
  - **Declarative**: Describe *what* the UI should look like for a given state, and React handles the DOM updates efficiently.
  - **Virtual DOM**: React keeps an in-memory representation of UI elements. When state changes, it calculates the difference (diffing algorithm) and updates only the necessary nodes in the real browser DOM (reconciliation).
  - **Single Page Application (SPA)**: Loads a single HTML file (`index.html`) and dynamically updates content without reloading the whole page.

---

## 2. Components in React

Components are the fundamental building blocks of any React application.

### Why Components?
1. **Reusability**: Write once, use in multiple places (e.g., `<Item />` reused three times in `App.jsx`).
2. **Separation of Concerns**: Each component encapsulates its structure, style, and logic.
3. **Maintainability**: Easy to locate, test, and refactor isolated pieces of code.

### Functional Components
In modern React, components are written as JavaScript functions that return JSX:

```jsx
import './Item.css';

function Item() {
    const itemName = "Nirma";
    return (
        <p className="para">{itemName}</p>
    );
}

export default Item;
```

### Component Rules & Best Practices
1. **PascalCase Naming**: Component function and file names must start with a capital letter (e.g., `Item`, `ItemDate`, `App`). Lowercase tags are reserved for standard HTML elements (e.g., `<div>`, `<p>`).
2. **Single Responsibility**: Each component should ideally do one thing well.
3. **Export & Import**:
   - **Default Export**: `export default Item;` -> imported with `import Item from './components/Item'`.
   - **Named Export**: `export { Item };` -> imported with `import { Item } from './components/Item'`.

---

## 3. Understanding JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that looks similar to HTML. It is compiled by Babel/Vite/Oxc into regular JavaScript `React.createElement()` calls.

### Key JSX Rules

| Rule | JSX Syntax | Standard HTML Equivalent | Note |
| :--- | :--- | :--- | :--- |
| **Class attribute** | `className="para"` | `class="para"` | `class` is a reserved keyword in JS. |
| **Label for attribute** | `htmlFor="inputId"` | `for="inputId"` | `for` is a reserved keyword in JS. |
| **Self-closing tags** | `<Item />`, `<br />`, `<img />` | `<img>`, `<br>` | All self-closing tags MUST be closed in JSX. |
| **Single Root Element** | `<>...</>` or `<div>...</div>` | Multiple sibling roots allowed | Every component must return exactly one root element or React Fragment. |
| **Expressions in JSX** | `{expression}` | N/A | Any valid JS expression placed in `{}` is evaluated. |

### JavaScript Expressions in JSX
Inside JSX, curly braces `{}` allow embedding dynamic JavaScript values, variables, and expressions:

```jsx
function ItemDate() {
    const day = 20;
    const month = "June";
    const year = 1998;

    return (
        <div className="mfg-date">
            <span> {day} </span>
            <span> {month} </span>
            <span> {year} </span>
        </div>
    );
}
```

---

## 4. Source Code Walkthrough

### 1. `main.jsx` (Application Entry Point)
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```
- **`createRoot`**: React 18+ API to initialize the root container at `<div id="root"></div>` located in `index.html`.
- **`StrictMode`**: Development helper that checks for potential problems (e.g., deprecated lifecycle methods, side effects run twice in dev mode).
- **`App`**: The top-level component that gets mounted to the DOM.

### 2. `App.jsx` (Root Component)
```jsx
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  return (
    <>
      <div>
        <Item></Item>
        <ItemDate></ItemDate>
        <Item></Item>
        <ItemDate></ItemDate>
        <Item></Item>
        <ItemDate></ItemDate>
        <div className='App'>Hello Guys</div>
      </div>
    </>
  );
}

export default App;
```
- Demonstrates **reusability**: `<Item>` and `<ItemDate>` are instantiated multiple times.
- Uses **Fragment syntax** `<>...</>` to group elements without introducing unnecessary wrapper DOM nodes.

### 3. `components/Item.jsx` (Presentation Component)
- Represents a shop item name.
- Imports scoped styling from `./Item.css`.

### 4. `components/ItemDate.jsx` (Data Rendering Component)
- Demonstrates declaring JavaScript variables (`day`, `month`, `year`) and interpolating them directly into the output via `{}`.

---

## 5. Styling in React

In this project, styling is applied via external CSS files imported directly into components:
- `import './Item.css'`
- `import './ItemDate.css'`
- `import './App.css'`

> [!NOTE]
> Standard CSS imports are globally scoped by default in Vite unless using CSS Modules (e.g. `Item.module.css`). Keep class names descriptive to prevent style collision.

---

## 6. Next Steps & Concepts to Learn

1. **Props (Properties)**:
   - Currently, `Item` always displays `"Nirma"` and `ItemDate` always displays `"20 June 1998"`.
   - *Next Step*: Pass props like `<Item name="Surf Excel" />` and `<ItemDate day={22} month="July" year={2002} />` to make components truly dynamic.
2. **Props Children (`props.children`)**:
   - Passing nested JSX or child elements inside custom components (wrapper components / card containers).
3. **State Management (`useState`)**:
   - Storing dynamic data that triggers re-renders when updated.
4. **Handling User Events**:
   - `onClick`, `onChange`, `onSubmit` event handlers.
