import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import OurServices from './views/ourServices/OurServices';
import { AuthContextProvider } from './context/authContext';
import Probar from './components/probar/Probar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ourservices',
    element: <OurServices />,
  },
]);

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <Probar />
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
