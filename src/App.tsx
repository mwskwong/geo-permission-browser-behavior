import loading from "./loading.png";
import styles from "./App.module.css";

const showClose = true;

export default function App() {
  return (
    <div className={styles["wait-pay-result"]}>
      {showClose && (
        <img
          // src={close}
          alt="close"
          width={25}
          height={25}
          className={styles["wait-pay-result-close"]}
          // onClick={() => {
          //   setShow(false);
          // }}
        />
      )}
      <img
        className={styles["wait-pay-result-loading"]}
        src={loading}
        width={40}
        height={41}
      />
      <span className={styles["wait-pay-result-title"]}>Title</span>
      <span className={styles["wait-pay-result-message"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </span>
    </div>
  );
}
