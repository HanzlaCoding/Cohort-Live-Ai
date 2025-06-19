# React Notes (Interview-Focused)

## 🔹 Class 1: Intro to React, Reconciliation, SPA vs MPA, JSX, Babel, Vite, npm

### 1. Intro to React
**Theory:**  
React is a JavaScript **library** for building **component-based UIs**. It uses a **Virtual DOM** for efficient rendering and supports **reusable components**.

**Code Structure:**
```jsx
function App() {
  return <h1>Hello, React!</h1>;
}
```

**Use Case:**  
Ideal for creating fast, scalable **Single Page Applications** with dynamic data.

**Interview Example:**  
Q: What is the Virtual DOM?  
A: A lightweight JS object that React uses to optimize DOM updates.

### 2. Reconciliation
**Theory:**  
Reconciliation is how React **diffs the new Virtual DOM with the previous** one and updates only the changed parts.

**Code Structure:**
```jsx
setCount(count + 1); // Triggers reconciliation
```

**Use Case:**  
Enhances performance by **avoiding full re-rendering**.

**Interview Example:**  
Q: How does React know what to update?  
A: Through the reconciliation algorithm using keys and Virtual DOM comparison.

### 3. SPA vs MPA
**Theory:**  
SPA: Loads only **one HTML page**, updates via JS.  
MPA: Loads **new HTML pages** from the server for each route.

**Code Structure:**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Use Case:**  
- SPA: Interactive dashboards.  
- MPA: SEO-oriented sites.

**Interview Example:**  
Q: How does routing work in SPA?  
A: Via React Router, which handles navigation **without page reloads**.

### 4. JSX
**Theory:**  
JSX is a **syntax extension** that looks like HTML in JS. Transpiled to `React.createElement()`.

**Code Structure:**
```jsx
const element = <h1>Hello, JSX!</h1>;
```

**Use Case:**  
Improves readability & structure of UI code.

**Interview Example:**  
Q: Can a component return multiple JSX elements?  
A: Yes, by wrapping them in a fragment: `<>...</>`.

### 5. Babel
**Theory:**  
Babel is a **JavaScript transpiler** that converts modern JS/JSX into code browsers understand.

**Use Case:**  
JSX support, backward compatibility.

**Interview Example:**  
Q: Why do we need Babel?  
A: JSX and ES6+ syntax is not directly readable by browsers.

### 6. Vite
**Theory:**  
Vite is a **fast build tool** using ES Modules and modern bundling.

**Code Structure:**
```bash
npm create vite@latest my-app --template react
```

**Use Case:**  
Fast startup, better HMR.

**Interview Example:**  
Q: CRA vs Vite?  
A: Vite is faster, modern and uses Rollup.

### 7. npm
**Theory:**  
npm is a **package manager** that installs libraries like React.

**Code Structure:**
```bash
npm install react react-dom
```

**Use Case:**  
Manages app dependencies.

**Interview Example:**  
Q: Difference between dependencies and devDependencies?  
A: `dependencies` are for production, `devDependencies` are for development.