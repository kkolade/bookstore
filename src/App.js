import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <h1 className="site-title">The Ultimate Bookstore</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/">{<Books />}</Route>
        <Route path="/category">{<Categories />}</Route>
      </Routes>
    </div>
  );
}

export default App;
