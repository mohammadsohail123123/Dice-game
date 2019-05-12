

   var dice;
   var check=0;
   var lastdice;
   var totalscore=[0,0];
   console.log(totalscore[0]);
   
   var activeplayer=0;
   roundscore=0;
   

start();


function start()
{
 check=0;
    
 totalscore=[0,0];
     document.getElementById('text').value="";
    document.getElementById("dice-score").style.display="none";
    document.getElementById("current-1").innerHTML=0;
    document.getElementById("current-0").innerHTML=0;
    document.getElementById("score-0").innerHTML=0;
    document.getElementById("score-1").innerHTML=0;
    
}

function generate() 
{
    if(check==0)
    {



 document.getElementById("dice-score").style.display="block";
    dice=Math.floor(Math.random()*6+1);
document.getElementById("dice-score").innerHTML=dice;

console.log("last dice",lastdice);
console.log("current dice ",dice);
 if(dice===6&&lastdice===6)
{
    alert("inside 66")
    totalscore[activeplayer]=0;
    document.querySelector("#score-"+activeplayer).innerHTML=totalscore[activeplayer];
    if(activeplayer==1)
    activeplayer=0;
    else
    activeplayer=1;

    roundscore=0;
document.getElementById('current-1').innerHTML=roundscore;
document.getElementById('current-0').innerHTML=roundscore;
document.querySelector('.leftcontainer').classList.toggle('active');
document.querySelector('.rightcontainer').classList.toggle('active');
document.getElementById('dice-score').style.display="none";

}

else if(dice!==1)
{

  
roundscore+=dice;
    document.getElementById('current-'+activeplayer).innerHTML=roundscore;
}
else
{

    roundscore=0;
if(activeplayer==1)
 activeplayer=0;
else
  activeplayer=1;



document.getElementById('current-1').innerHTML=roundscore;
document.getElementById('current-0').innerHTML=roundscore;
document.querySelector('.leftcontainer').classList.toggle('active');
document.querySelector('.rightcontainer').classList.toggle('active');
document.getElementById('dice-score').style.display="none";

}
lastdice=dice;


    }



    else
        alert("start new game");
    


}






function hold()
{

    totalscore[activeplayer]+=roundscore;

    document.querySelector('#score-'+activeplayer).innerHTML=totalscore[activeplayer];
   roundscore=0;
   document.getElementById('current-1').innerHTML=roundscore;
document.getElementById('current-0').innerHTML=roundscore;
    if(activeplayer==0)
    {
        activeplayer=1;
    }
    else
    activeplayer=0;

    document.querySelector('.leftcontainer').classList.toggle('active');
document.querySelector('.rightcontainer').classList.toggle('active');
document.getElementById('dice-score').style.display="none";

console.log("checking scores "+totalscore[0]+ "  "+totalscore[1]);

var gamesize=document.getElementById('text').value;
   


if(totalscore[0]>totalscore[1])
{

if(totalscore[0]>gamesize)
{
    document.querySelector('#score-'+0).innerHTML="winner";
  check=1;
    document.getElementById("dice-score").style.display="none";
}
}
else{

    if(totalscore[1]>gamesize)
    {
       check=1;
    document.querySelector('#score-'+1).innerHTML="winner";
    document.getElementById("dice-score").style.display="none";
}
}


}

document.querySelector(".btn-new").addEventListener('click',start);



