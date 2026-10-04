# React Learning Notes — React2 Workspace

Comprehensive study guide, architecture walkthrough, and reference notes for React fundamentals and the **DemoShopApp** project.

---

## 1. What is React?

- **Core Definition**: React is an open-source, component-based JavaScript library for building user interfaces, maintained by Meta and a vast open-source community.
- **Key Architectural Concepts**:
  - **Component-Driven Development**: UIs are constructed by assembling small, isolated, reusable building blocks called components.
  - **Declarative Paradigm**: You declare *what* the UI should look like for given data and state. React handles DOM mutations efficiently behind the scenes.
  - **Virtual DOM (VDOM)**: React maintains a lightweight representation of the real DOM in memory. When changes occur, React compares the new virtual DOM with the previous snapshot (diffing algorithm) and updates only the necessary elements in the actual DOM (reconciliation).
  - **Single Page Application (SPA)**: The browser downloads one HTML shell (`index.html`), and React dynamically renders and swaps views without reloading the page.

---

## 2. Components in React

Components are reusable functions that return JSX to describe UI elements.

### Functional Components
Modern React relies on **Functional Components** — plain JavaScript functions returning JSX:

```jsx
import './Item.css';

function Item(props) {
    const itemName = props.name;
    return (
        <p className="para">{itemName}</p>
    );
}

export default Item;
```

### Component Rules & Conventions
1. **PascalCase Naming**: Component function and file names must start with a capital letter (e.g. `Item`, `ItemDate`, `App`). Lowercase identifiers (`<div>`, `<p>`, `<span>`) are reserved for native HTML tags.
2. **Export & Import**:
   - **Default Export**: `export default Item;` (imported via `import Item from './components/Item'`).
   - **Named Export**: `export { Item };` (imported via `import { Item } from './components/Item'`).
3. **Single Root Element**: A component can return only one root element or a Fragment (`<>...</>`).

---

## 3. Understanding JSX (JavaScript XML)

JSX allows writing HTML-like syntax directly within JavaScript code. Under the hood, build tools compile JSX into standard `React.createElement()` calls.

### Core JSX Rules

| Rule | JSX Syntax | Standard HTML Equivalent | Reason / Note |
| :--- | :--- | :--- | :--- |
| **CSS Class** | `className="para"` | `class="para"` | `class` is a reserved keyword in JavaScript. |
| **Form Label For** | `htmlFor="inputId"` | `for="inputId"` | `for` is a reserved keyword in JavaScript (`for` loop). |
| **Self-Closing Tags** | `<Item />`, `<br />`, `<img />` | `<img>`, `<br>` | In JSX, all elements without children must explicitly close. |
| **Single Root** | `<>...</>` or `<div>...</div>` | Multiple sibling roots | JavaScript functions can return only one value/expression. |
| **Embedding Expressions** | `{expression}` | N/A | Any valid JavaScript expression enclosed in `{}` is evaluated. |

---

## 4. Props (Properties) — Passing Data Between Components

Props allow parent components to pass data down to child components, establishing a **unidirectional (top-to-bottom) data flow**.

### 1. Passing Props from Parent (`App.jsx`)
Props are passed like HTML attributes:
```jsx
// 1. Static literal strings:
<Item name="Nirma"></Item>
<ItemDate day="20" month="June" year="2000"></ItemDate>

// 2. Dynamic JavaScript variables (enclosed in curly braces {}):
const itemTwoName = "Surf Excel";
<Item name={itemTwoName}></Item>
```

### 2. Consuming Props in Child Component
Props are received as a single JavaScript object parameter:

```jsx
// Approach A: Accessing via props object
function Item(props) {
    const itemName = props.name;
    return <p className="para">{itemName}</p>;
}

// Approach B: Object destructuring directly in function parameters
function ItemDate({ day, month, year }) {
    return (
        <div className="mfg-date">
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    );
}
```

### 3. Key Characteristics of Props
- **Read-Only (Immutable)**: A component must never modify its own `props`. All React components must act like pure functions with respect to their props.
- **Any Data Type**: Props can accept strings, numbers, booleans, arrays, objects, functions, and even other React elements (`children`).

---

## 5. Styling Custom Components via `{props.className}`

One of the most common pitfalls when learning React is expecting `className` on a custom component to work like it does on native HTML elements.

### The Problem: Custom Components Do Not Automatically Inherit `className`

Consider this code:
```jsx
// App.jsx
<Card className="highlight-card">
    <Item name="Nirma" />
</Card>
```

If `Card.jsx` is defined simply as:
```jsx
// Card.jsx (INCORRECT / INCOMPLETE)
function Card(props) {
    return <div className="card">{props.children}</div>;
}
```

> [!WARNING]
> **The `highlight-card` style will NOT be applied!**  
> Custom React components are JavaScript functions, not native HTML DOM nodes. React does **not** automatically forward `className` to the underlying `<div>`. To `<Card>`, `className` is just another custom prop: `props.className`.

---

### The Solution: Manually Extracting and Combining `{props.className}`

To make classes passed from parent components take effect, you must explicitly read `props.className` and combine it with your component's internal class:

#### Method 1: String Concatenation (Classic Pattern)
```jsx
import './Card.css';

function Card(props) {
    // Combine base class with any custom classes passed from the parent
    const classes = 'card ' + (props.className || '');

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;
```

#### Method 2: Template Literals (Modern Clean Syntax)
```jsx
import './Card.css';

function Card(props) {
    const classes = `card ${props.className || ''}`.trim();

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;
```

#### Method 3: Props Destructuring with Default Value
```jsx
import './Card.css';

function Card({ className = '', children }) {
    const classes = `card ${className}`.trim();

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Card;
```

---

### Critical Gotchas with `{props.className}`

| Common Mistake | Code | Result in HTML DOM | Impact |
| :--- | :--- | :--- | :--- |
| **Missing Space** | `'card' + props.className` | `<div class="cardhighlight-card">` | ❌ Neither class works because the names merge into one invalid class. |
| **Missing Fallback** | `'card ' + props.className` (when no class passed) | `<div class="card undefined">` | ⚠️ Adds the literal string `"undefined"` as a CSS class. |
| **Correct Pattern** | `'card ' + (props.className \|\| '')` or template literal | `<div class="card highlight-card">` | ✅ Both base and external styles apply cleanly. |

---

## 6. Component Composition with `{props.children}`

`props.children` is a reserved React prop that represents whatever content is placed **between the opening and closing tags** of a custom component.

### Why Use `props.children`?
- Enables creating **Wrapper / Container Components** (e.g., `Card`, `Modal`, `Sidebar`, `Panel`).
- Avoids hardcoding inner content, making the wrapper reusable for any elements.

### Example in DemoShopApp:

```jsx
// Card.jsx — Reusable container
import './Card.css';

function Card(props) {
    const classes = 'card ' + (props.className || '');
    return <div className={classes}>{props.children}</div>;
}

export default Card;
```

```jsx
// App.jsx — Using Card as a wrapper
<Card className="shop-container">
    <Item name={response[0].itemName}>Hello Guys Im First Item</Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />
</Card>
```

In `Item.jsx`, children can also be rendered inside:
```jsx
// Item.jsx
function Item(props) {
    const itemName = props.name;
    return (
        <div>
            <p className="para">{itemName}</p>
            {props.children} {/* Renders "Hello Guys Im First Item" */}
        </div>
    );
}
```

---

## 7. Walkthrough of the DemoShopApp Codebase

```text
React2/
├── DemoShopApp/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Card.jsx         # Wrapper container using props.children & props.className
│   │   │   ├── Card.css         # Base styles for Card (.card)
│   │   │   ├── Item.jsx         # Renders item title via props.name & optional children
│   │   │   ├── Item.css         # Styles for Item
│   │   │   ├── ItemDate.jsx     # Renders manufacturing date (day, month, year)
│   │   │   └── ItemDate.css     # Styles for ItemDate
│   │   ├── App.jsx              # Parent component passing data array, props & Card wrapper
│   │   ├── App.css              # App container styles
│   │   ├── main.jsx             # React entry point mounting to DOM root
│   │   └── index.css            # Global resets
```

### Component Hierarchy
```mermaid
graph TD
    HTML["index.html (#root)"] --> Main["main.jsx (createRoot)"]
    Main --> App["App.jsx (Data: response array)"]
    App --> Card["Card.jsx (wrapper: props.children + props.className)"]
    Card --> Item1["Item (name=response[0].itemName)"]
    Item1 --> Child1["props.children: 'Hello Guys Im First Item'"]
    Card --> Date1["ItemDate (day, month, year from response[0])"]
    Card --> Item2["Item (name=response[1].itemName)"]
    Card --> Date2["ItemDate (day, month, year from response[1])"]
    Card --> Item3["Item (name=response[2].itemName)"]
    Card --> Date3["ItemDate (day, month, year from response[2])"]
```

---

## 8. Next Steps & Advanced Concepts

1. **State Management (`useState`)**:
   - Making components interactive by storing and updating internal state.
2. **Event Handling**:
   - Adding interactive event listeners: `onClick`, `onChange`, `onSubmit`.
3. **Lifting State Up**:
   - Sharing state between sibling components by managing it in their common parent.
4. **Rendering Lists with `.map()`**:
   - Dynamically rendering `response.map((item) => ...)` instead of manual array index referencing.

