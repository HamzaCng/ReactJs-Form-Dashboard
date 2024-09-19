import * as React from 'react';
import './App.css';

import i18n from './i18n';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import AuthRoute from "./routes/AuthRoute";
import AdminRoute from "./routes/AdminRoute";
import { Suspense, useState } from 'react';
import Loader from './components/Loader';
import LocalContex from './contex/LocaleContex';
import NotFound from './pages/Error/404';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import Toast from './components/Toast';
import { GlobalStateProvider } from './contex/UserContex';
import AppAppBar from './components/Appbar';
import Dashboard from './dashboard/Dashboard';
import Profile from './dashboard/UserDetail/index';

function App() {
  const [locale, setLocale] = useState(i18n.language);

  return (
    <GlobalStateProvider>
      <LocalContex.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loader />} >
          <AppAppBar mode={'light'} setLocale={setLocale} language={locale} />
          <Routes>
            <Route element={<AdminRoute />}>
              <Route path={'/'} element={<Dashboard />} exact />
            </Route>

            <Route element={<PrivateRoutes />}>
              <Route path={'/Form'} element={<LandingPage />} exact />
              <Route path={'/Profile'} element={<Profile />} exact />
            </Route>

            <Route path={'/'} element={
              <HomePage />
            } />

            <Route element={<AuthRoute />}>
              <Route path={'/Signin'} element={<SignIn />} />
              <Route path={'/SignUp'} element={<SignUp />} />
              <Route path={'/ForgotPassword'} element={<ForgotPassword />} />
            </Route>
            <Route path={'/*'} element={<NotFound />} />
          </Routes>
          <Toast />
        </Suspense>
      </LocalContex.Provider>
    </GlobalStateProvider>
  );
}

export default App;
