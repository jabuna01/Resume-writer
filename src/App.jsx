import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { authenticate } from "./services/authentication.service";
import { router } from "./routes";
import './sass/style.scss';

const filterPublicRoutes = (isPublic) => {
  const routes = router.filter((route) => route.public === isPublic);
  return routes;
};

function App() {
  return (
    <>
      {authenticate() ? (
        <RouterProvider
          router={createBrowserRouter(filterPublicRoutes(false))}
        />
      ) : (
        <RouterProvider
          router={createBrowserRouter(filterPublicRoutes(true))}
        />
      )}
    </>
  );
}

export default App;
