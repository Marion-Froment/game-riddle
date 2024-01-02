import { prompt } from "./prompt.js";
// pour jouer entrer dans la console : node index.js"

console.log(
  "Bienvenue dans le jeu de devinette de nombre ! 🎮\n" +
    "Règles :\n" +
    "1. Le système générera un nombre aléatoire entre 0 et 100.\n" +
    "2. Votre tâche est de deviner ce nombre.\n" +
    "3. Entrez un nombre lorsque vous y êtes invité.\n" +
    "4. Si votre supposition est trop élevée ou trop basse, vous serez averti, et vous pourrez deviner à nouveau.\n" +
    "5. Le jeu continue jusqu'à ce que vous deviniez le bon nombre.\n" +
    "Commençons ! 🚀\n"
);

function validateNumber(number) {
  const smallNumber = 1;
  const bigNumber = 100;

  if (Number.isNaN(number) || number < smallNumber || number > bigNumber) {
    console.log(
      "Erreur : votre choix doit être un nombre compris entre 1 et 100"
    );
  }
}

function GameCompareNumber(targetNumber) {
  const numberUser = Number(prompt("Choisir un nombre entre 1 et 100 : "));

  trialNumber++;
  validateNumber(numberUser);

  if (numberUser < targetNumber) {
    console.log("Le nombre attendu est plus grand");
    return GameCompareNumber(targetNumber);
  }
  if (numberUser > targetNumber) {
    console.log("Le nombre attendu est plus petit ");
    return GameCompareNumber(targetNumber);
  }
  if (numberUser === targetNumber) {
    console.log(
      `Bravo vous avez trouvez le bon nombre aléatoire qui est ${targetNumber} ! Vous avez réussi en ${trialNumber} tentatives.  `
    );
    newGame();
  }
}

function newGame() {
  const restartGame = prompt("Voulez-vous rejouer ? (O/N) : ").toUpperCase();
  if (restartGame === "O") {
    const newTargetNumber = Math.floor(Math.random() * 100) + 1;
    trialNumber = 0;
    GameCompareNumber(newTargetNumber);
  }
  if (restartGame === "N") {
    console.log("Merci d'avoir joué !");
  }
  if (restartGame !== "O" && restartGame !== "N") {
    newGame();
  }
}

const initialTargetNumber = Math.floor(Math.random() * 100) + 1;
let trialNumber = 0;
GameCompareNumber(initialTargetNumber);
