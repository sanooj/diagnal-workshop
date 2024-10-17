import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderSpinner}>
        <span className={styles.srOnly}>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
