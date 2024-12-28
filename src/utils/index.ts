import { lazy, LazyExoticComponent } from "react";
import YangilikById from "../component/YangiliklarById";
import Loyihalar from "../component/Barcha tadbirlar/Loyihalar";
import Tanlovlar from "../component/Barcha tadbirlar/Tanlovlar";
import Grandlar from "../component/Barcha tadbirlar/Grandlar";
import ImkoniyatlarQidiruv from "../component/ImkoniyatlarQidiruv";

const Home = lazy(() => import("../component/Home/index"));
const ForGirls = lazy(() => import("../component/Xotin-qizlar uchun"));
const OpportuniyById = lazy(() => import("../component/OpportuniyById"));
const NogironligiBorlarUchun = lazy(
  () => import("../component/Nogironligi borlar uchun")
);
const YoshlarUchun = lazy(() => import("../component/Yoshlar uchun"));
const TalimUchun = lazy(() => import("../component/Talim uchun"));
const TadbirkorlikUchun = lazy(() => import("../component/Tadbirkorlik uchun"));
const Tadbirlar = lazy(() => import("../component/Tadbirlar"));
const BarchaTadbirlar = lazy(() => import("../component/Barcha tadbirlar"));
const Loyihalar = lazy(() => import("../component/Barcha tadbirlar/Loyihalar"));
const Grandlar = lazy(() => import("../component/Barcha tadbirlar/Grandlar"));
const Tanlovlar = lazy(() => import("../component/Barcha tadbirlar/Tanlovlar"));
const TadbirById = lazy(() => import("../component/TadbirlarById"));
const YangilikById = lazy(() => import("../component/YangiliklarById"));
const Yangiliklar = lazy(() => import("../component/Yangiliklar"));
const ImkoniyatlarQidiruv = lazy(() => import("../component/ImkoniyatlarQidiruv"));
const BarchaImkoniyatlar = lazy(
  () => import("../component/Barcha imkoniyatlar")
);
const About = lazy(() => import("../component/About"));
const Aloqa = lazy(() => import("../component/Aloqa"));
const Register = lazy(() => import("../component/Register"));
const Login = lazy(() => import("../component/Login"));
const Profil = lazy(() => import("../component/Profil"));
const AdminLogin = lazy(() => import("../component/AdminLogin/Login"));

interface RouteData {
  id: number;
  path: string;
  component: LazyExoticComponent<React.ComponentType<any>>;
}

export const Data: RouteData[] = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/xotin-qizlar-uchun",
    component: ForGirls,
  },
  {
    id: 3,
    path: "/opportunity/:category/:id",
    component: OpportuniyById,
  },
  {
    id: 4,
    path: "/nogironligi-borlar-uchun",
    component: NogironligiBorlarUchun,
  },
  {
    id: 5,
    path: "/yoshlar-uchun",
    component: YoshlarUchun,
  },
  {
    id: 6,
    path: "/talim-uchun",
    component: TalimUchun,
  },
  {
    id: 7,
    path: "/tadbirkorlik-uchun",
    component: TadbirkorlikUchun,
  },
  {
    id: 8,
    path: "/tadbirlar",
    component: Tadbirlar,
  },
  {
    id: 9,
    path: "/barcha-tadbirlar",
    component: BarchaTadbirlar,
  },
  {
    id: 10,
    path: "/tadbir/:id",
    component: TadbirById,
  },
  {
    id: 11,
    path: "/yangiliklar",
    component: Yangiliklar,
  },
  {
    id: 10,
    path: "/news/:id",
    component: YangilikById,
  },
  {
    id: 12,
    path: "/biz-haqimizda",
    component: About,
  },
  {
    id: 13,
    path: "/aloqa",
    component: Aloqa,
  },
  {
    id: 14,
    path: "/register",
    component: Register,
  },
  {
    id: 15,
    path: "/login",
    component: Login,
  },
  {
    id: 16,
    path: "/barcha-imkoniyatlar",
    component: BarchaImkoniyatlar,
  },
  {
    id: 17,
    path: "/profil",
    component: Profil,
  },
  {
    id: 18,
    path: "/profil/sozlamalar",
    component: Profil,
  },
  {
    id: 18,
    path: "/profil/taklif",
    component: Profil,
  },
  {
    id: 19,
    path: "/profil/barcha-murojatlar",
    component: Profil,
  },
  {
    id: 20,
    path: "/profil/imkoniyat-buyicha-murojatlar",
    component: Profil,
  },
  {
    id: 21,
    path: "/admin-login",
    component: AdminLogin,
  },
  {
    id: 22,
    path: "/loyihalar",
    component: Loyihalar,
  },
  {
    id: 23,
    path: "/grandlar",
    component: Grandlar,
  },
  {
    id: 24,
    path: "/tanlovlar",
    component: Tanlovlar,
  },
  {
    id: 25,
    path: "/imkoniyatlar",
    component: ImkoniyatlarQidiruv,
  },
];
