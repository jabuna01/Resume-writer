import LoginPage from "../components/pages/LoginPage";
import LandingPage from "../components/pages/LandingPage";
import Upload from "../scenes/upload";
import Landing from "../scenes/landing";
import Loading from "../scenes/loading";
import Edit from "../scenes/edit-page";
import HomePage from "../components/pages/HomePage";
import Recommendation from "../scenes/ai_recommendation";

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
  {
    path: "/home-screen",
    element: <HomePage />,
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
  {
    path: "/Design/loading",
    element: <Loading />,
    public: true,
  },
  {
    path: "/Design/edit",
    element: <Edit />,
    public: true,
  },
  {
    path: "/Design/ai",
    element: <Recommendation />,
    public: true,
  },
];
