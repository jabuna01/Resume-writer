import LoginPage from "../components/pages/LoginPage";
import LandingPage from "../components/pages/LandingPage";

export const router = [
  {
    path: "/",
    element: <LoginPage />,
    public: true,
  },
  {
    path: "/landing-screen",
    element: <LandingPage />,
    public: false,
  },
];
