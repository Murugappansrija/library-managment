import  Home  from './component/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Sidenav from './Sidenav'
import BookList from './component/BookList';
import AddBook from './component/AddBook';
import EditBook from './component/EditBook';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/books' element={<BookList />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
