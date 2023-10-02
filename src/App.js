import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header"
import Home from "./components/pages/home/Home";
import MovieList from './components/movieList/MovieList';
import Movie from './components/pages/movieDetail/Movie';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='movie/:id' element={<Movie/>}></Route>
      <Route path='movies/:type' element={<MovieList/>}></Route>
      <Route path='/*' element={<h1>Error page</h1>}></Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
