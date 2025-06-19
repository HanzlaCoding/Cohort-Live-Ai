## 🔹 Class 2: Import/Export, Boilerplate, Functional Components, Event Listeners & Handlers

### 1. Import / Export
**Theory:**  
Used to modularize and reuse code.

**Code Structure:**
```jsx
// Greet.js
export default function Greet() {
  return <h1>Hello</h1>;
}
// App.js
import Greet from './Greet';
```

**Interview Example:**  
Q: Named vs default export?  
A: Default exports can be renamed on import. Named must match exactly.

### 2. Boilerplate
**Theory:**  
Basic folder & code setup to start a React project.

**Code Structure:**
```bash
npm create vite@latest my-app --template react
```

### 3. Functional Components
**Theory:**  
JS functions that return JSX. Modern React uses this style.

**Code Structure:**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Interview Example:**  
Q: Can functional components manage state?  
A: Yes, using hooks like `useState`.

### 4. Event Listeners & Handlers
**Theory:**  
Used for UI interactivity.

**Code Structure:**
```jsx
function ClickMe() {
  const handleClick = () => alert("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}
```

**Interview Example:**  
Q: How to pass parameters to handlers?  
A: Use an arrow function: `onClick={() => handleClick(id)}`

## 🔹 Class 3: State, Conditional Rendering, Lists & Keys

### 1. State
**Theory:**  
State stores **dynamic data** in a component.

**Code Structure:**
```jsx
const [count, setCount] = useState(0);
```

### 2. Conditional Rendering
**Theory:**  
Render based on conditions.

**Code Structure:**
```jsx
{isLoggedIn ? <h1>Welcome</h1> : <h1>Please Log In</h1>}
```

### 3. Lists & Keys
**Theory:**  
Render multiple elements with `.map()`, keys identify elements.

**Code Structure:**
```jsx
const fruits = ['Apple', 'Banana'];
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>
```

## 🔹 Class 4: Forms, Controlled Components, React Hook Form, useRef

### 1. Forms & Controlled Components
**Theory:**  
Controlled inputs are tied to component state.

**Code Structure:**
```jsx
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### 2. React Hook Form
**Theory:**  
Efficient form management.

**Code Structure:**
```jsx
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register("username")} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 3. useRef
**Theory:**  
Access DOM nodes or store mutable values.

**Code Structure:**
```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

## 🔹 Class 5: Code Splitting & Reusing Components

### 1. Code Splitting
**Theory:**  
Load code only when needed.

**Code Structure:**
```jsx
const LazyComp = React.lazy(() => import('./LazyComp'));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComp />
</Suspense>
```

### 2. Reusing Components
**Theory:**  
Create reusable UI components with `props`.

**Code Structure:**
```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```