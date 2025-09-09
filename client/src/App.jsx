import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import './App.css';
import Reference, { loader as referenceLoader } from './pages/Reference';
import Home from './pages/Home';
import PractiseQuiz from './pages/PractiseQuiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'reference',
        element: <Reference />,
        loader: referenceLoader,
        HydrateFallback: () => null,
      },
      { path: 'practise', element: <PractiseQuiz /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
