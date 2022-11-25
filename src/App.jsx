import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Error from './components/Error';
import Category from './routes/category';
import { categories } from './routes/root';

const categoryRoutes = categories.map((category) => {
  return {
    path: `/categories/:category`,
    element: <Category />,
    errorElement: <Error />,
  };
});

const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <Error /> },
  ...categoryRoutes,
]);

console.log(router);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
