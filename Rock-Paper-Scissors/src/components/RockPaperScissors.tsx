import styles from "./RockPaperScissors.module.css";

export default function RockPaperScissors() {
  return (
    <main className={styles["main-container"]}>
      <section className={styles["result-logo-game-area-container"]}>
        <article className={styles["result-and-logo-container"]}>
          <header>
            <img src="./src/assets/logo.svg" alt="game-logo" />
          </header>
          <div className={styles["score-container"]}>
            <p>Score</p>
            <p className={styles["result"]}>11</p>
          </div>
        </article>

        <article className={styles["game-area"]}>
          <div className={styles["triangle-container"]}>
            <img src="./src/assets/bg-triangle.svg" alt="triangle" />
            <button className={`${styles["circle"]} ${styles["paper"]}`}>
              <img src="./src/assets/icon-paper.svg" alt="paper" />
            </button>
            <button className={`${styles["circle"]} ${styles["scissors"]}`}>
              <img src="./src/assets/icon-scissors.svg" alt="scissors" />
            </button>
            <button className={`${styles["circle"]} ${styles["rock"]}`}>
              <img src="./src/assets/icon-rock.svg" alt="rock" />
            </button>
          </div>
        </article>
      </section>

      <section className={styles["rules-section"]}>
        <button className={styles["rules-button"]}>rules</button>
      </section>
    </main>
  );
}

// import styles from "./RockPaperScissors.module.css";

// export default function RockPaperScissors() {
//   return (
//     <main className={styles["main-container"]}>
//       <section className={styles["result-logo-game-area-container"]}>
//         <article className={styles["result-and-logo-container"]}>
//           <header>
//             <img src="./src/assets/logo.svg" alt="game-logo" />
//           </header>
//           <div className={styles["score-container"]}>
//             <p>Score</p>
//             <p className={styles["result"]}>11</p>
//           </div>
//         </article>

//         <article className={styles["game-area"]}>
//           <div className={styles["triangle-container"]}>
//             <img src="./src/assets/bg-triangle.svg" alt="triangle" />
//             <button className={`${styles["circle"]} ${styles["paper"]}`}>
//               <img src="./src/assets/icon-paper.svg" alt="paper" />
//             </button>
//             <button className={`${styles["circle"]} ${styles["scissors"]}`}>
//               <img src="./src/assets/icon-scissors.svg" alt="scissors" />
//             </button>
//             {/* <button className={`${styles["circle"]} ${styles["rock"]}`}>
//               <img src="./src/assets/icon-rock.svg" alt="rock" />
//             </button> */}
//           </div>
//         </article>
//       </section>

//       <section className={styles["rules-section"]}>
//         <button className={styles["rules-button"]}>rules</button>
//       </section>
//     </main>
//   );
// }
