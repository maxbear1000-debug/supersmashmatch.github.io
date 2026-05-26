function SelectFighter(name){
  const text = document.getElementById("selected text");
  text.innerHTML = 'You selected <span style ="color: yellow"> ${name}</span>!';
  playSound(); 
}
