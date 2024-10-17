import { lazy, useState } from "react";
import clsx from "clsx";
import { useAppContext } from "src/application/App.context";

import backButton from "src/assets/images/back-arrow.png";
import searchIcon from "src/assets/images/search-icon.png";

const Link = lazy(() => import("src/components/Link/Link"));

import SearchBox from "src/components/SearchBox/SearchBox";
import styles from "./Header.module.scss";

/**
 * A Header component that displays the title of the current page and a
 * back button. It also displays a search icon that can be clicked to
 * show a SearchBox component. The SearchBox component can be closed with
 * the close button, and the Header component will return to its original
 * state.
 *
 * @returns {JSX.Element} The Header component.
 */
const Header = () => {
  const { title: pageTitle } = useAppContext();
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);

  return (
    <div
      className={clsx(styles.header, {
        [styles.searchMode]: isSearchBoxVisible,
      })}>
      <Link to={-1} props={{ className: styles.backButton }}>
        <img src={backButton} alt='back' />
      </Link>
      <h1>{pageTitle}</h1>
      {isSearchBoxVisible ? (
        <SearchBox onSearchBoxClose={setIsSearchBoxVisible} />
      ) : (
        <button className={styles.searchButton} onClick={() => setIsSearchBoxVisible(true)}>
          <img src={searchIcon} alt='Search' />
        </button>
      )}
    </div>
  );
};

export default Header;
