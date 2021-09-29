import LoginScreen from '../pages/LoginScreen/LoginScreen';
import MainScreen from '../pages/MainScreen/MainScreen';

export const privateRoutes = [
  { path: '/main', component: MainScreen, exact: true },
];

export const publicRoutes = [
  { path: '/login', component: LoginScreen, exact: true },
]
