import styles from "./cube.module.scss";

export default function rotatingCube() {
  return (
    <div className={`relative mx-auto flex justify-center w-[200px] h-[200px]`}>
      <div className={styles.scene}>
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`}></div>
          <div className={`${styles.face} ${styles.back}`}></div>
          <div className={`${styles.face} ${styles.right}`}></div>
          <div className={`${styles.face} ${styles.left}`}></div>
          <div className={`${styles.face} ${styles.top}`}></div>
          <div className={`${styles.face} ${styles.bottom}`}></div>
        </div>
      </div>
    </div>
  );
}
