function SelectFighter(name) {
  const text = document.getElementById("selected text");
  text.innerHTML = `You selected <span style="color: yellow">${name}</span>!`;

  const fighter = mathupInfo[name];
  const matchupInfo = document.getElementById("matchupInfo");

  if (fighter && matchupInfo) {
    matchupInfo.innerHTML = `
      <h3>Good Matchup</h3>
      <p>${fighter.good.join(", ")}</p>
      <h3>Bad Matchups</h3>
      <p>${fighter.bad.join(", ")}</p>
    `;
  }

  playSound();
}

const mathupInfo = {
  Mario: {
    good: ["Donkey Kong", "Ganondorf"],
    bad: ["Pikachu", "Samus"]
  },
  Link: {
    good: ["Incineroar", "Villager/isabelle"],
    bad: ["joker", "Mmin min"]
  }
};

function playSound() {
  const audio = new Audio("audio flie ");
  audio.play();
}

  
