import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingComponent } from "../component/Loading";
import { Data } from "../utils/index";
import { AdminData } from "../utils/admin";
import AdminView from "../component/Admin/AdminView";
import AuthGuard from "../component/AuthGuard";
import { useTranslation } from "react-i18next";

const Root: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'uz');
  
  useEffect(() => {
    i18n.changeLanguage(language);
    setLanguage(localStorage.getItem('language') || 'uz');
  }, []);


  interface RouteData {
    component: React.ComponentType<any>;
    path: string;
  }
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        {Data.map(({ component: Component, path }: RouteData, i: number) => (
          <Route path={path} element={<Component />} key={i} />
        ))}
        <Route path="/admin" element={<AuthGuard><AdminView /></AuthGuard>}>
          {AdminData.map(
            ({ component: Component, path }: RouteData, i: number) => (
              <Route path={path} element={<Component />} key={i} />
            )
          )}
        </Route>

        <Route
          path={"*"}
          element={
            <div className="flex w-full h-screen justify-center items-center">
              <h1>404 Not found 🙁</h1>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Root;
