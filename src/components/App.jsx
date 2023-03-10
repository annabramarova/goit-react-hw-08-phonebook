import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';

import { Layout } from './Layout';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { current } from '../redux/auth/authOperations';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));


export default function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isRefreshing ? (
    <div><Loader /></div>
  )
    : ( 
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />        
        <Route path="*" element=<Navigate to="/" /> />
        <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
        <Route path="/register" element={<RestrictedRoute redirectTo='/contacts' component={<RegistrationPage />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />} />
      </Route>
    </Routes>
    );
};