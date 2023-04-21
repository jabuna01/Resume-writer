import LoginPage from "../components/pages/LoginPage";
import LandingPage from "../components/pages/LandingPage";
import Upload from "../scenes/upload";
import Landing from "../scenes/landing";
export const router = [
  {
    path: "/",
    element: <LoginPage />,
    public: true,
  },
  {
    path: "/landing-screen",
    element: <LandingPage />,
    public: true,
  },
  //Design Templates
  {
    path: "/Design/upload",
    element: <Upload />,
    public: true,
  },
  {
    path: "/Design/landing",
    element: <Landing />,
    public: true,
  },
];
