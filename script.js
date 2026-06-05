function SelectFighter(name) {
  const text = document.getElementById(`${name}-text`);
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
  },
  Bowser: {
    good: ["Ganondorf", "Little Mac"],
    bad: ["Pikachu", "Palutena"]
  },
  DonkeyKong: {
    good: ["Little Mac", "Ganondorf"],
    bad: ["Pikachu", "Zero Suit Samus (ZSS)"]
  },
  Samus: {
    good: ["Donkey Kong", "Incineroar"],
    bad: ["Olimar", "Fox"]
  },
  Olimar: {
    good: ["Samus", "Donkey Kong"],
    bad: ["Sephiroth", "Fox"]
  },
  CaptainFalcon: {
    good: ["Min Min", "Ganondorf"],
    bad: ["Pikachu", "Mario"]
  },
  Falco: {
    good: ["Bowser", "Snake"],
    bad: ["Pikachu", "Shulk"]
  },
};

function playSound() {
  const audio = new Audio("audio flie ");
  audio.play();
}

  
