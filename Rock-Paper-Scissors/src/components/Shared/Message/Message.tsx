import styles from "./Message.module.css";

interface MessageProps {
  title: string;
  message?: string;
  headerClass?: string;
  leftButtonTitle: string;
  rightButtonTitle: string;
  leftOnClick: any;
  rightOnClick: any;
}

export default function Message({
  title,
  message,
  headerClass,
  leftButtonTitle,
  rightButtonTitle,
  leftOnClick,
  rightOnClick,
}: MessageProps) {
  return (
    <article className={styles["message"]}>
      <header className={`${styles["message-header"]} ${headerClass}`}>
        <h1>{title}</h1>
        <h3>{message}</h3>
      </header>

      <div className={styles["buttons"]}>
        <button className={styles["button"]} onClick={leftOnClick}>
          {leftButtonTitle}
        </button>
        <button className={styles["button"]} onClick={rightOnClick}>
          {rightButtonTitle}
        </button>
      </div>
    </article>
  );
}
