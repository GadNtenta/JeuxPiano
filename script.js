const piano__key = document.querySelectorAll(".piano__key");
let audio = new Audio("./Tunes/");

// Dictionnaire des notes et leurs touches correspondantes
const noteToKey = {
  do: "d",
  re: "r",
  mi: "m",
  fa: "f",
  sol: "s",
  la: "l",
  si: "s",
  "do-sharp": "q",
  "re-sharp": "w",
  "fa-sharp": "e",
  "sol-sharp": "r",
  "la-sharp": "t",
};

// Fonction qui joue la note correspondante
const playTune = (key) => {
  audio.src = `./Tunes/${key}.wav`;
  audio.play();
};

// Écouteur d'événements pour les clics sur les touches du piano
piano__key.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.note));
});

// Écouteur d'événements pour les touches du clavier
document.addEventListener("keydown", (event) => {
  const key = event.key; // Récupère la touche pressée
  const note = Object.keys(noteToKey).find((n) => noteToKey[n] === key); // Trouve la note correspondante

  if (note) {
    playTune(note); // Joue la note correspondante
  } else {
    alert(
      "Ceci n'est pas une touche du piano. les touches du piano sont : d, r, m, f, s, l, q, w, e, r, t et correspondantes aux notes Do, Re, Mi, Fa, Sol, La, Do#, Re#, Fa#, Sol#, La#"
    );
  }
});
