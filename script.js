function SelectFighter(name) {
  const text = document.getElementById("selectedText");
  text.innerHTML = `You selected <span style="color: yellow">${name}</span>!`;

  const fighter = mathupInfo[name];
  const infoBox = document.getElementById(`${name}-info`);

  
  infoBox.innerHTML = `
    <h3>Good Matchups</h3>
    <p>${fighter.good.join(", ")}</p>

    <h3>Bad Matchups</h3>
    <p>${fighter.bad.join(", ")}</p>
  `;
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

  
