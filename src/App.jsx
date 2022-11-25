import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Root from './routes/root';
import Error from './components/Error';
import Category from './routes/category';

const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <Error /> },
  {
    path: '/categories/:currentCategory',
    element: <Category />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
