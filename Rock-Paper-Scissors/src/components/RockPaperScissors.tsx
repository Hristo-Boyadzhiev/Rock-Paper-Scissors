import { useGameContext } from "../hooks/useGameContext";
import Footer from "./Footer/Footer";
import Game from "./Game/Game";
import Header from "./Header/Header";
import styles from "./RockPaperScissors.module.css";
import Rules from "./Rules/Rules";

export default function RockPaperScissors() {
  const { winner } = useGameContext();
  return (
    <div className={styles["container"]}>
      <main
        className={styles["main-container"]}
        style={{ gap: winner ? "7em" : "11em" }}
      >
        <section
          className={styles["header-and-game-container"]}
          style={{ gap: winner ? "4em" : "12em" }}
        >
          <Header />
          <Game />
        </section>
        <Rules />
      </main>
      <Footer />
    </div>
  );
}
