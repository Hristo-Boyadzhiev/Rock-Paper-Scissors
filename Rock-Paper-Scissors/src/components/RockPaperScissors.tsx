import Footer from "./Footer/Footer";
import Game from "./Game/Game";
import Header from "./Header/Header";
import styles from "./RockPaperScissors.module.css";
import Rules from "./Rules/Rules";

export default function RockPaperScissors() {
  return (
    <div className={styles["container"]}>
      <Header />
      <Game />
      <Rules />
      <Footer />
    </div>
  );
}
