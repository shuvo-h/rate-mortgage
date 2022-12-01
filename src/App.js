import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider } from 'react-router-dom';
import { allRouters } from './views/routes/router';
import { useEffect } from 'react';

function App() {
  
  return (
    <div>
      <RouterProvider router={allRouters}></RouterProvider>
    </div>
  );
}

export default App;
