let player = "O";
let data = [];
let z = 1;
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mo = 0;
let mx = 0;
let mt = 0;
let zz = 0;
let aiplay=0;
function clicked(num) {
  tex = document.getElementById("text" + num);
  if (tex.innerText == "" && zz == 0 && aiplay<2) {
    player = player == "O" ? "X" : "O";
    
    
   
    if (player == "X") 
      {
      box = document.getElementById("box" + num);
      box.style.background = "red";
      tex.innerText = player;
      ar[num - 1] = player;
      if (z >= 5) {
        marks();
      }
      } 
    else if(aiplay==0) 
      {
      box = document.getElementById("box" + num);
      box.style.background = "blue";
      
      tex.innerText = player;
      ar[num - 1] = player;
      }
    
    
    if (aiplay==1 && zz == 0 &&z!=9){
      player = player == "O" ? "X" : "O";
        num=aibrain();
        console.log(num);
        tex1 = document.getElementById("text" + num);
        box = document.getElementById("box" + num);
        box.style.background = "blue";
        tex1.innerText = player;
        ar[num - 1] = player;
        z++;
      }
      

    if (z >= 5) {
      marks();
    }
    if (z == 9) {
      t = document.getElementById("result");
      t.innerText = "Its a tie match";
      tt = document.getElementById("tm");
      mt += 1;
      tt.innerText = mt;
      z = 0;
      player = "X";
    }
   
    z++;
  } else if (zz == 1) {
    alert("game over restart it");
  }
  else if (aiplay==99) {
    alert("please click to select modes such as 2 players or ai vs you");
  }
  else {
    alert("not possible to insert take another cell");
  }
}
function check() {
  let i = 0;
  let c = 0;

  while (i < 3) {
    if (ar[i] == ar[i + 3] && ar[i] == ar[i + 6]) {
      winc(i + 1, i + 3 + 1, i + 6 + 1);
      return true;
    }
    if (ar[i + c] == ar[i + 1 + c] && ar[i + c] == ar[i + 2 + c]) {
      winc(i + 1 + c, i + 1 + c + 1, i + 2 + c + 1);
      return true;
    }
    i++;
    c += 2;
  }
  if (ar[0] == ar[4] && ar[0] == ar[8]) {
    winc(1, 5, 9);
    return true;
  }
  if (ar[2] == ar[4] && ar[2] == ar[6]) {
    winc(3, 5, 7);
    return true;
  }
  return false;
}
function reset() {

  ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let temp = 1;
  while (temp < 10) {
    tex = document.getElementById("text" + temp);
    tex.innerText = "";

    box = document.getElementById("box" + temp);
    box.style.background = "white";
    temp += 1;
  }
  tex = document.getElementById("result");
  tex.innerText = "";
  player = "O";
  zz = 0;
  pqr=8;
  z=1;
}
function winc(p, q, r) {
  
  box = document.getElementById("box" + p);
  box.style.background = "green";
  box = document.getElementById("box" + q);
  box.style.background = "green";
  box = document.getElementById("box" + r);
  box.style.background = "green";
}
function aicode(){

    
    let bt=document.getElementById("ai");
    bt.innerHTML="player vs ai";
    if(aiplay==0){
      bt.innerHTML="<b>Player vs AI </b>(if 2 players need to play then change mode)";
      aiplay=1;
    }
    else{
      bt.innerHTML="<b>Player vs Player </b>(You vs AI need to play then change mode)"; 
      aiplay=0;
    }
    z = 1;
    let btx=document.getElementById("aix");
    btx.innerHTML="Change Mode";
    reset();
    
}
function marks(){
  if (check()) 
    {
      zz = 1;

      t = document.getElementById("result");
      t.innerText = "The winner is " + player;

      if (player == "X") {
        tt = document.getElementById("xm");
        mx += 1;
        tt.innerText = mx;
      } else {
        tt = document.getElementById("om");
        mo += 1;
        tt.innerText = mo;
      }
      z = 0;
    }
}
let pqr=8;
function aibrain(){
  let resx=main11("X","O");
  if(resx!=99){
    return resx;
  }
  resx=main11("O","X");
  if(resx!=99){
    return resx;
  }
  
  if (ar[4]!="X" && ar[4]!="O"){
    return 5;
  }
  if (ar[0]!="X"&& ar[0]!="O"){
    return 1;
  }
  if (ar[8]!="X" && ar[8]!="O"){
    return 9;
  }
  if (ar[2]!="X" && ar[2]!="O"){
    return 3;
  }
  if (ar[6]!="X" && ar[6]!="O"){
    return 7;
  }
  let tempt=0;
  while(tempt<=8)
    {
    if (ar[tempt]!="O" &&ar[tempt]!="X")
      {
          return tempt+1;
    }
    tempt+=1
  }
 
}

function main11(a,b){
  i=0
  c=0;
  while (i < 3) {
    if (ar[i] == a && ar[i+6] ==a && ar[i+3]!=b&& ar[i+3]!=a) 
    {
      
      return i+3+1;
    }
    if (ar[i+3] == a && ar[i+6] ==a && ar[i]!=b&& ar[i]!=a) 
      {
        
        return i+1;
      }
      if (ar[i+3] == a && ar[i] ==a && ar[i+6]!=b && ar[i+6]!=a) 
        {
          
          return i+6+1;
        }


    if (ar[i + c] == a && ar[i + c+1] ==a && ar[i + 2 + c]!=b&& ar[i + 2 + c]!=a) {
     
      return i + 2 + c+1;
    }
    if (ar[i + c+ 2] == a && ar[i + c+1] ==a && ar[i + c ]!=b&& ar[i + c ]!=a) {
      
      return i  + c+1;
    }
    if (ar[i + c] == a && ar[i + c+2] ==a && ar[i + 1 + c]!=b&& ar[i + 1 + c]!=a) {
     
      return i + 2 + c;
    }







    i++;
    c += 2;
  }
  if (ar[0] ==a&& ar[4]==a && ar[8] !=b&& ar[8] !=a) {
   
    return 9;
  }
  if (ar[4] ==a&& ar[8]==a && ar[0] !=b&& ar[0] !=a) {
   
    return 1;
  }
  if (ar[8] ==a&& ar[0]==a && ar[4] !=b&& ar[4] !=a) {
   
    return 5;
  }
  if (ar[2] ==a&& ar[4]==a && ar[6] !=b&& ar[6] !=a) {
   
    return 7;
  }
  if (ar[4] ==a&& ar[6]==a && ar[2] !=b&& ar[2] !=a) {
   
    return 3;
  }
  if (ar[6] ==a&& ar[2]==a && ar[4] !=b&& ar[4] !=a) {
  
    return 5;
  }
  return 99;
}
