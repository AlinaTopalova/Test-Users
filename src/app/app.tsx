import MainPage from 'pages/main-page/main-page';
import './app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from 'constants/constants';
import UserPage from 'pages/user-page/user-page';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={`${AppRoute.Users}/:userId`} element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

