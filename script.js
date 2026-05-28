function SelectFighter(name){
  const text = document.getElementById("selected text");
  text.innerHTML = 'You selected <span style ="color: yellow"> ${name}</span>!';
  playSound(); 
}

const mathupInfo = {
  Mario: {
    good: ["Donkey Kong", "Ganondorf"],
    bad: ["Pikachu", "Samus"]
  },
  Link: {
    good: ["Incineroar", "Villager"],
    bad: ["Joker","Min Min"]
  }
};

const fighter = matchups[name];


  
