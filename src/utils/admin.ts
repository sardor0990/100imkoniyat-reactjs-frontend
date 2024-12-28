import { lazy, LazyExoticComponent } from "react";
const Foydalanuvchilar = lazy(
  () => import("../component/Admin/Foydalanuvchilar")
);
const Imkoniyatlar = lazy(() => import("../component/Admin/Imkoniyatlar"));
const Tadbirlar = lazy(() => import("../component/Admin/Tadbirlar"));
const OnlaynForum = lazy(() => import("../component/Admin/Onlayn forum"));
const Fikrlar = lazy(() => import("../component/Admin/Fikrlar"));
const Murojaatlar = lazy(() => import("../component/Admin/Murojaatlar"));
const Takliflar = lazy(() => import("../component/Admin/Takliflar"));
const Loyihalar = lazy(()=> import("../component/Admin/Tadbirlar/Loyihalar"))
const Qoshish = lazy(()=> import("../component/Admin/Tadbirlar/Loyihalar/Qoshish"))
const GrandQoshish = lazy(()=> import("../component/Admin/Tadbirlar/Grandlar/GrandQoshish"))
const TanlovQoshish = lazy(()=> import("../component/Admin/Tadbirlar/Tanlovlar/TanlovQoshish"))
const Tahrirlash = lazy(()=> import("../component/Admin/Tadbirlar/Tahrirlash"))
const FikrlarQoshish = lazy(()=>import("../component/Admin/Fikrlar/Qo'shish"))
const FikrlarTahrirlash = lazy(()=>import("../component/Admin/Fikrlar/Tahrirlash"))
const MurojatlarInfo = lazy(()=>import("../component/Admin/Murojaatlar/Info"))
const Status = lazy(()=>import('../component/Admin/Murojaatlar/Status'))
const Read = lazy(()=>import('../component/Admin/Takliflar/Read'))
const ImkoniyatlarQoshish  = lazy(()=>import("../component/Admin/Imkoniyatlar/ImkoniyatlarQo'shish"))
const Imkoniyatlaredit = lazy(()=>import('../component/Admin/Imkoniyatlar/Imkoniyatlaredit'))
const Imkoniyatdetail = lazy(()=>import('../component/Admin/Imkoniyatlar/Detail'))
const DetailAdd = lazy(()=>import('../component/Admin/Imkoniyatlar/Detail/DetailAdd'))
const DetailEdit = lazy(()=>import('../component/Admin/Imkoniyatlar/Detail/DetailEdit'))
const FoydalanuvchilarDetail = lazy(()=>import('../component/Admin/Foydalanuvchilar/FoydalanuvchilarDetail'));
const MurojaatlarDetail = lazy(() => import('../component/Admin/Foydalanuvchilar/FoydalanuvchilarDetail/MurojaatlarFoydalanuvchilar/MurojaatlarDetail'));
const Grandlar = lazy(() => import('../component/Admin/Tadbirlar/Grandlar'));
const Tanlovlar = lazy(() => import('../component/Admin/Tadbirlar/Tanlovlar'));
const Yangiliklar = lazy(() => import('../component/Admin/Yangiliklar'));
const YangilikQoshish = lazy(() => import('../component/Admin/Yangiliklar/YangilikQoshish'));

import TakliflarIcon from "../assets/icons/wallet-line (1).svg";
import MurojaatlarIcon from "../assets/icons/briefcase-2-line.svg";
import FikrlarIcon from "../assets/icons/wallet-line.svg";
import TadbirlarIcon from "../assets/icons/calendar.svg";
import OnlaynForumIcon from "../assets/icons/bar-chart-line.svg";
import FoydalanuvchilarIcon from "../assets/icons/profile-2user.svg";
import ImkoniyatlarIcon from "../assets/icons/chart.svg";

interface RouteData {
  id: number;
  path: string;
  component: LazyExoticComponent<React.ComponentType<any>>;
  icon?: any;
  hidden: boolean;
  title?: string;
  isActive?: boolean;
}
export const AdminData: RouteData[] = [
  {
    id: 1,
    path: "/admin/foydalanuvchilar",
    component: Foydalanuvchilar,
    icon: FoydalanuvchilarIcon,
    hidden: true,
    title: "Foydalanuvchilar",
  },
  {
    id: 2,
    path: "/admin/imkoniyatlar",
    component: Imkoniyatlar,
    icon: ImkoniyatlarIcon,
    hidden: true,
    title: "Imkoniyatlar",
    isActive: true,
  },
  {
    id: 3,
    path: "/admin/tadbirlar",
    component: Tadbirlar,
    icon: TadbirlarIcon,
    hidden: false,
    title: "Tadbirlar",
  },
  {
    id: 4,
    path: "/admin/onlayn-forum",
    component: OnlaynForum,
    icon: OnlaynForumIcon,
    hidden: true,
    title: "Onlayn forum",
  },
  {
    id: 5,
    path: "/admin/fikrlar",
    component: Fikrlar,
    icon: FikrlarIcon,
    hidden: true,
    title: "Fikrlar",
  },
  {
    id: 6,
    path: "/admin/murojaatlar",
    component: Murojaatlar,
    icon: MurojaatlarIcon,
    hidden: false,
    title: "Murojaatlar",
  },
  {
    id: 7,
    path: "/admin/takliflar",
    component: Takliflar,
    icon: TakliflarIcon,
    hidden: true,
    title: "Takliflar",
  },
  {
    id:8,
    path:"/admin/tadbirlar/loyihalar",
    hidden: true,
    component:Loyihalar,
    title: "Tadbirlar",
  },
  {
    id:9,
    path:"/admin/tadbirlar/loyihalar/qo'shish",
    hidden: true,
    component:Qoshish,
    title: "Qoshish",
  },
  {
    id: 10,
    path: "/admin/tadbirlar/loyihalar/tahrirlash/:cardId",  // Note the :cardId to capture the ID
    hidden: true,
    component: Tahrirlash,
    title: "Tahrirlash",
  },
  {
    id:11,
    path:"/admin/fikrlar/qo'shish",
    hidden: true,
    component:FikrlarQoshish,
    title: "Qoshish",
  },
  {
    id:12,
    path:'/admin/fikrlar/tahrirlash/:fikrlarid',
    hidden: true,
    component:FikrlarTahrirlash,
    title:"Fikrlartahrirlash"
  },
  {
    id:13,
    path:'/admin/murojaatlar/info/:murojatlarid',
    hidden: true,
    component:MurojatlarInfo,
    title:"MurojatlarInfo"
  },
  {
    id:14,
    path:'/admin/murojaatlar/info/:murojatlarid/status',
    hidden: true,
    component:Status,
    title:"MurojatlarInfo"
  },
  {
    id:15,
    path:'/admin/takliflar/read/:takliflarid',
    hidden: true,
    component:Read,
    title:"Read"
  },
  {
    id:16,
    path:"/admin/imkoniyatlar/qo'shish",
    hidden: true,
    component:ImkoniyatlarQoshish,
    title:"Read"
  },
  {
    id:17,
    path:"/admin/imkoniyatlar/tahrirlash/:imkoniyatid",
    hidden: true,
    component:Imkoniyatlaredit,
    title:"Read"
  },
  {
    id:18,
    path:"/admin/imkoniyatlar/:detail",
    hidden: true,
    component: Imkoniyatdetail,
    title:"Read"
  },
  {
    id:18,
    path:"/admin/imkoniyatlar/:detail",
    hidden: true,
    component: Imkoniyatdetail,
    title:"Read"
  },
  {
    id:19,
    path:"/admin/imkoniyatlar/:detail/qoshish",
    hidden: true,
    component: DetailAdd,
    title:"Read"
  },
  {
    id:20,
    path:"/admin/imkoniyatlar/:detail/tahrirlash/:detailid",
    hidden: true,
    component: DetailEdit,
    title:"Read"
  },
  {
    id:21,
    path: "/admin/foydalanuvchilar/:detail/:detailid",
    hidden: true,
    component: FoydalanuvchilarDetail,
    title: "FoydalanuvchilarDetail"
  },
  {
    id:22,
    path: "/admin/foydalanuvchilar/murojaatlar/detail/:murojaatlarid",
    hidden: true,
    component: MurojaatlarDetail,
    title: "MurojaatlarDetail"
  },
  // {
  //   id:23,
  //   path: "/admin/foydalanuvchilar/murojaatlar/detail/:murojaatlarid/statusMurojaatlar",
  //   hidden: true,
  //   component: StatusMurojaatlar,
  //   title: "StatusMurojaatlar"
  // },
  {
    id:24,
    path:"/admin/tadbirlar/grandlar",
    hidden: true,
    component: Grandlar,
    title: "Grandlar",
  },
  {
    id:25,
    path:"/admin/tadbirlar/tanlovlar",
    hidden: true,
    component: Tanlovlar,
    title: "Tanlovlar",
  },
  {
    id:26,
    path:"/admin/Yangiliklar",
    hidden: false,
    icon: FoydalanuvchilarIcon,
    component: Yangiliklar,
    title: "Yangiliklar",
  },
  {
    id:27,
    path:"/admin/tadbirlar/grandlar/qo'shish",
    hidden: true,
    component:GrandQoshish,
    title: "Qoshish",
  },
  {
    id:28,
    path:"/admin/tadbirlar/tanlovlar/qo'shish",
    hidden: true,
    component:TanlovQoshish,
    title: "Qoshish",
  },
  {
    id:29,
    path:"/admin/yangiliklar/qo'shish",
    hidden: true,
    component:YangilikQoshish,
    title: "Qoshish",
  }
];
