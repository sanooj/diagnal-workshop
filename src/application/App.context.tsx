import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface IAppContext {
  currentPage: number;
  title: string;
  searchString: string;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setSearchString: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext({} as IAppContext);

/**
 * The AppProvider component wraps the AppContext.Provider component and
 * provides the necessary state and functions to the AppContext.
 * @param {{ children: React.ReactNode }} props - The props of the component.
 * @returns {React.ReactElement} The AppProvider component.
 */
export const AppProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [title, setTitle] = useState<string>("");
  const [searchString, setSearchString] = useState<string>("");
  return (
    <AppContext.Provider
      value={
        {
          currentPage,
          title,
          searchString,
          setTitle,
          setCurrentPage,
          setSearchString,
        } as IAppContext
      }>
      {children}
    </AppContext.Provider>
  );
};

/**
 * Returns the state and functions from the AppContext. This hook must be
 * used within an AppProvider. If not, it will throw an error.
 * @returns {IAppContext} The AppContext state and functions.
 */
export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return {
    currentPage: context.currentPage,
    setCurrentPage: context.setCurrentPage,
    title: context.title,
    setTitle: context.setTitle,
    searchString: context.searchString,
    setSearchString: context.setSearchString,
  };
};
