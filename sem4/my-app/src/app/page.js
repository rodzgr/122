import Dogs from './componentes/Dogs';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Dogs/>
      </div>
    </main>
  );
}
