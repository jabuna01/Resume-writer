import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { authenticate } from "./services/authentication.service";
import { router } from "./routes";

const filterPublicRoutes = (isPublic) => {
  const routes = router.filter((route) => route.public === isPublic);
  return routes;
};

function App() {
  return (
    <>
      {authenticate() ? (
        <RouterProvider
          router={createBrowserRouter(filterPublicRoutes(true))}
        />
      ) : (
        <RouterProvider
          router={createBrowserRouter(filterPublicRoutes(false))}
        />
      )}
    </>
  );
}

export default App;
