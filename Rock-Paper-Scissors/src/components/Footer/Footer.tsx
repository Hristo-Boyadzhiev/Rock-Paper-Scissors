import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by Hristo Boyadzhiev.
    </footer>
  );
}
