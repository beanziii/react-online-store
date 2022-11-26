import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Error from './components/Error';
import Category from './routes/category';

const categories = [
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

const categoryRoutes = categories.map(() => {
  return {
    path: `/:category`,
    element: <Category />,
    errorElement: <Error />,
  };
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root categories={categories} />,
    errorElement: <Error />,
    children: [...categoryRoutes],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
