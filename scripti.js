
let btn = document.querySelector("#btn");
const aleatório = Math.floor(Math.random()*50);
let vida = 10;
let achou = false;

while((vida != 0)&&(achou == false)){
    let chute = Number(prompt("Chute um número!\n Você tem "+ vida+" vidas"))
    if(chute == 100) break;
    if(chute == aleatório){
      alert("Parabens vc acertou");
        achou = true;
    }else if (chute < aleatório) {
        alert( "Quase lá !\nTente um chute mais alto");
    } else {
       alert("Chute um numero mais baixo\n Você tem: " +vida + " vidas");
    }
   
    vida --;
}

console.log("Fim");
