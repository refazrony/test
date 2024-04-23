import { BrowserRouter, Routes, Route } from "react-router-dom"
// import AppRouters from "./AppRouters"
import { useDispatch, useSelector } from "react-redux";
import { toggleRTL, toggleTheme, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from "./store/themeConfigSlice";
import { useEffect } from "react";
import store from "./store";
import PrivateRoutes from "./page/PrivateRoutes";
import Default from "./page/Default";


function App() {


  const themeConfig = useSelector((state) => state.themeConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
    dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
    dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
    dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
    dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
    dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
    // dispatch(toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale));
    dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
  }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.semidark]);

  return (
    <div
      className={`${(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${themeConfig.rtlClass
        } main-section antialiased relative font-nunito text-sm font-normal`}
    >
      <BrowserRouter>

        {/* <AppRouters /> */}




        <Routes>

          <Route element={<PrivateRoutes />}>

            <Route element={<Default />} path="/" />
            {/* <Route element={<AdcClaim ival={initialValues} />} path="/claims" />
          <Route element={<Products />} path="/products" />
          <Route element={<Purchase />} path="/products/:productId/:productName" /> */}

          </Route>



        </Routes>





      </BrowserRouter>
    </div>

  )
}

export default App
