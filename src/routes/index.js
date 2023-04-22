import config from "~/config";

//Layouts
import { HeaderOnly } from "~/layouts";

//pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";

//Public routes

const publicRoutes = [
  //   { path: "/", component: Home },
  //   { path: "/following", component: Following },
  //   { path: "/profile", component: Profile },
  //   { path: "/search", component: Search, layout: null },
  //   { path: "/upload", component: Upload, layout: HeaderOnly },
  // {path : '/upload', component : Upload, layout : HeaderOnly},

  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
