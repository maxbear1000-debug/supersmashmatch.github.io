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

mathupInfo.innerHTML = '
  <h3>Good Mathup</h3> 
  <p> ${fighter.good.join(", ")} </p>
  <h3>Bad Mathups</h3>
  <p> ${fighter.bad.join(", ")}</p>
';

function playSound (){
  const
  
  
}

  
