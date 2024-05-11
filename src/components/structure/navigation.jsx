import About from "../../page/About";
import Account from "../../page/Account";
import Home from "../../page/Home";
import { Login } from "../../page/Login";
import Private from "../../page/Private";

export const nav = [
  { path: "/", name: "Home", element: <Home />, isMenu: true, isPrivate: false },
  { path: "/about", name: "About", element: <About />, isMenu: true, isPrivate: false },
  { path: "/login", name: "Login", element: <Login />, isMenu: false, isPrivate: false },
  { path: "/private", name: "Private", element: <Private />, isMenu: true, isPrivate: true },
  { path: "/account", name: "Account", element: <Account />, isMenu: true, isPrivate: true },
];
