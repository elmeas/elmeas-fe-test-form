import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FormPage } from "./pages/FormPage.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/some/form/123">Form 123</Link>
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">{/* ... existing App content ... */}</div>
            }
          />
          <Route path="/some/form/:id" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
