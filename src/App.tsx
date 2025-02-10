import loading from "./loading.png";
import styles from "./App.module.css";

export default function App() {
  return (
    <img className={styles.loading} src={loading} width={40} height={41} />
  );
}
