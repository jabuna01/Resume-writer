import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { authenticate } from "./services/authentication.service";
import { router } from "./routes";
import "./sass/style.scss";

import store from './store'
import { Provider } from 'react-redux'


const filterPublicRoutes = (isPublic) => {
  const routes = router.filter((route) => route.public === isPublic);
  return routes;
};

function App() {
  return (
    <>
    <Provider store={store}>
      {authenticate() ? (
        <RouterProvider
          router={createBrowserRouter(filterPublicRoutes(true))}
        />
      ) : (
        <RouterProvider
          router={createBrowserRouter(filterPublicRoutes(false))}
        />
      )}
      </Provider>
    </>
  );
}

export default App;
