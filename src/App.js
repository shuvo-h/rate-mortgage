import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { allRouters } from './views/routes/router';

function App() {
  
  return (
    <div>
      <RouterProvider router={allRouters}></RouterProvider>
    </div>
  );
}

export default App;
