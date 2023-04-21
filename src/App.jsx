import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./sass/style.scss";
import { authenticate } from "./services/authentication.service";
import LoginPage from "./components/pages/LoginPage";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            exact
            path="/landing-screen"
            element={
              authenticate() ? <LandingPage /> : <Navigate replace to={"/"} />
            }
          ></Route>
          <Route path="/home-screen" element={
              authenticate() ? <HomePage /> : <Navigate replace to={"/"} />
            }></Route>
      {/* <Route path="/" element={<LoginPage/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
