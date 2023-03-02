/* eslint-disable import/extensions */
import { Link, Route, Routes } from 'react-router-dom';
import Books from './components/Books.jsx';
import Categories from './components/Categories.jsx';

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
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
