import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />}>
              {/* <Home /> */}
            </Route>
            <Route path='/create' element={<Create />}>
              {/* <Create /> */}
            </Route>
            <Route path='/blogs/:id' element={<BlogDetails />}>
              {/* <BlogDetails /> */}
            </Route>
            <Route path='*' element={<NotFound />}>
              {/* <NotFound /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
