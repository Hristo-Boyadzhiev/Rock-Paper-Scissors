import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <span>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"
          target="_blank"
        >
          Frontend Mentor
        </a>
        <span>. </span>
      </span>
      <span>Coded by Hristo Boyadzhiev.</span>
    </footer>
  );
}
