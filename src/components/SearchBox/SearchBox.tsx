import { ChangeEvent, useCallback, useEffect, useRef } from "react";

import { useAppContext } from "src/application/App.context";
import { debounce } from "src/utils/debounce";

import closeIcon from "src/assets/images/close-icon.svg";

import styles from "./SearchBox.module.scss";

/**
 * A SearchBox component that displays a text input and a close button.
 * When the user types something in the input, it will debounce the input
 * and call the setSearchString function from the AppContext with the
 * current value of the input. The close button will clear the search input
 * and also call setSearchString with an empty string. If setSearchBoxStatus
 * is provided, it will also call that function with false when the close
 * button is clicked.
 * @param setSearchBoxStatus An optional function that will be called with
 * false when the close button is clicked.
 * @returns A JSX.Element.
 */
const SearchBox = ({ onSearchBoxClose }: { onSearchBoxClose?: (value: boolean) => void }) => {
  const { setSearchString } = useAppContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const searchHandler = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      setSearchString(e.target.value);
    }, 500),
    [setSearchString],
  );

  const clearSearch = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setSearchString("");
    }
    onSearchBoxClose?.(false);
  };

  return (
    <div className={styles.searchInput}>
      <input type='text' ref={inputRef} placeholder='Search' onChange={searchHandler} />
      <button className={styles.searchButton} onClick={clearSearch}>
        <img src={closeIcon} alt='Search' />
      </button>
    </div>
  );
};

export default SearchBox;
