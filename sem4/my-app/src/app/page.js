import Dogs from './componentes/Dogs';
import Foto from './componentes/Foto';
import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.mainn}>
       
        <Dogs/>
        <Dogs/>
        <Dogs/>
        <Dogs/>
        <Dogs/>
        <Dogs/>
      </div>
    
  );
}
