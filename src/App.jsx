import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./sass/style.scss";
import { authenticate } from "./services/authentication.service";
import LoginPage from "./components/pages/LoginPage";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";

import store from "./store";
import { Provider } from "react-redux";
import PersonalInformationPage from "./components/pages/Personal-InformationPage";
import ProjecstExperiencePage from "./components/pages/Projects-ExperiencePage";
import EducationPage from "./components/pages/EducationPage";

function App() {
  return (
    <>
      <Provider store={store}>
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
            <Route
              path="/home-screen"
              element={
                authenticate() ? <HomePage /> : <Navigate replace to={"/"} />
              }
            ></Route>
            <Route
              path="/personal-information-screen"
              element={
                authenticate() ? (
                  <PersonalInformationPage />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            ></Route>
            <Route
              path="/projects-experience-screen"
              element={
                authenticate() ? (
                  <ProjecstExperiencePage />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            ></Route>
            <Route
              path="/educations-screen"
              element={
                authenticate() ? (
                  <EducationPage />
                ) : (
                  <Navigate replace to={"/"} />
                )
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
