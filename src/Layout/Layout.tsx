import { Outlet } from "react-router-dom";
import { lazy } from "react";
const Header = lazy(() => import("src/components/Header/Header"));
import styles from "./Layout.module.scss";

/**
 * The root component of the app. It renders a Header and an
 * Outlet, which will render the current route.
 *
 * @returns {JSX.Element} The Layout component.
 */
const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
