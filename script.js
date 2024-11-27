let player="O";
let data=[];
let z=1;
let ar=[1,2,3,4,5,6,7,8,9];
let mo=0;
let mx=0;
let mt=0;
let zz=0;
function clicked(num){
    tex=document.getElementById("text"+num);
    if(tex.innerText == "" && zz==0)
        {
        player=player=="O"?"X":"O"
        tex.innerText=player;  
        ar[num-1]=player;
        if(player=="X"){
            box=document.getElementById("box"+num);
            box.style.background="red";
        }
        else{
            box=document.getElementById("box"+num);
            box.style.background="blue";
        }
        if(z>=5)
        {
            if(check())
                {
                    zz=1;
                t=document.getElementById("result");
                t.innerText="The winner is "+player;

                if(player=="X"){
                    tt=document.getElementById("xm")
                    mx+=1;
                    tt.innerText=mx;
                }
                else{
                    tt=document.getElementById("om")
                    mo+=1;
                    tt.innerText=mo;
                }
                z=0;
               
                
            
                
            }
        }
        if(z==9){
            t=document.getElementById("result");
            t.innerText="Its a tie match";
            tt=document.getElementById("tm")
            mt+=1;
            tt.innerText=mt;
            z=0;
            player="X"
      
        }
        z++;
        
    }
    else if(zz==1)
        {
            alert("game over restart it")
   
    }
    else{
       alert("not possible to insert take another cell")
    }
}
function check(){
   let i=0;
   let c=0;
   
   while(i<3)
        {
            if(ar[i]==ar[i+3] && ar[i]==ar[i+6] )
                {
                    winc(i+1,i+3+1,i+6+1);
                    return true;
                }
            if(ar[i+c]==ar[i+1+c] && ar[i+c]==ar[i+2+c] )
                {
                    winc(i+1+c,i+1+c+1,i+2+c+1);
                    return true;
                }
        i++;
        c+=2;
        }
    if(ar[0]==ar[4]&& ar[0]==ar[8]){
        winc(1,5,9);
        return true;
    }
    if(ar[2]==ar[4]&& ar[2]==ar[6]){
        winc(3,5,7);
        return true;
    }
    return false;
}
function reset(){
    console.log("reseted");
    ar=[1,2,3,4,5,6,7,8,9];
    let temp=1;
    while(temp<10){
        tex=document.getElementById("text"+temp);
        tex.innerText="";
        
        box=document.getElementById("box"+temp);
        box.style.background="white";
        temp+=1;
    }
    tex=document.getElementById("result");
    tex.innerText="";
    player="O";
    zz=0;
      

}
function winc(p,q,r)
{
    console.log(p+" "+q+" "+r);
        box=document.getElementById("box"+p);
        box.style.background="green";
        box=document.getElementById("box"+q);
        box.style.background="green";
        box=document.getElementById("box"+r);
        box.style.background="green";
}