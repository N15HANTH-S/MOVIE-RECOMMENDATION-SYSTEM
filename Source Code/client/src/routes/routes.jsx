import HomePage from "../pages/HomePage";
import PersonDetail from "../pages/PersonDetail";
import FavoriteList from "../pages/FavoriteList";
import WatchLater from "../pages/WatchLater";
import MediaDetail from "../pages/MediaDetail";
import MediaList from "../pages/MediaList";
import MediaSearch from "../pages/MediaSearch";
import PasswordUpdate from "../pages/PasswordUpdate";
import ReviewList from "../pages/ReviewList";
import ProtectedPage from "../components/common/ProtectedPage";
import About from '../pages/About';
import FAQ from '../pages/FAQ';
import TermsOfService from '../pages/TermsOfService';
import TermsOfUse from '../pages/TermsOfUse';
import WhyUs from '../pages/WhyUs';
import MeetUs from '../pages/MeetUs';
import Credits from '../pages/Credits';
import License from '../pages/License';
import Instagram from '../pages/Instagram';
import Facebook from '../pages/Facebook';
import Whatsapp from '../pages/Whatsapp';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Help from '../pages/Help';
import Support from '../pages/Support';
import TermsOfConditions from "../pages/TermsOfConditions";

export const routesGen = {
  home: "/",
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  mediaSearch: "/search",
  person: (id) => `/person/${id}`,
  favoriteList: "/favorites",
  watchlater: "/watchlater",
  reviewList: "/reviews",
  passwordUpdate: "password-update",
  topRated:"/top-rated"
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/person/:personId",
    element: <PersonDetail />,
    state: "person.detail"
  },
  {
    path: "/search",
    element: <MediaSearch />,
    state: "search"
  },
  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update"
  },
  {
    path: "/favorites",
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: "favorites"
  },
  {
    path: "/watchlater",
    element: (
      <ProtectedPage>
        <WatchLater />
      </ProtectedPage>
    ),
    state: "watchlater"
  },
  {
    path: "/reviews",
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: "reviews"
  },
  {
    path: "/:mediaType",
    element: <MediaList />
  },
  {
    path: "/:mediaType/:mediaId",
    element: <MediaDetail />
  },
  // Static pages
  {
    path: "/about",
    element: <About />,
    state: "about"
  },
  {
    path: "/faq",
    element: <FAQ />,
    state: "faq"
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService />,
    state: "terms.of.service"
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
    state: "terms.of.use"
  },
  {
    path: "/why-us",
    element: <WhyUs />,
    state: "why.us"
  },
  {
    path: "/meet-us",
    element: <MeetUs />,
    state: "meet.us"
  },
  {
    path: "/credits",
    element: <Credits />,
    state: "credits"
  },
  {
    path: "/license",
    element: <License />,
    state: "license"
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    state: "privacy.policy"
  },
  {
    path: "/help",
    element: <Help />,
    state: "help"
  },
  {
    path: "/support",
    element: <Support />,
    state: "support"
  },
  {
    path: "/terms-of-conditions",
    element: <TermsOfConditions />,
    state: "terms.of.conditions"
  },
  {
    path: "/instagram",
    element: <Instagram />,
    state: "instagram"
  },
  {
    path: "/facebook",
    element: <Facebook />,
    state: "facebook"
  },
  {
    path: "/whatsapp",
    element: <Whatsapp />,
    state: "whatsapp"
  }
];

export default routes;
