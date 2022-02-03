p1name=localStorage.getItem("player1");
p2name=localStorage.getItem("player2");
p1score=0;
p2score=0;
document.getElementById("p1name").innerHTML=p1name+ ":";
document.getElementById("p2name").innerHTML=p2name+ ":";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="Question turn - "+p1name;
document.getElementById("player_answer").innerHTML="Answer turn - "+p2name;

function send()
{
    word=document.getElementById("word").value;
    L1=word.charAt(1);
    console.log(L1);
    Temp=Math.floor(word.length/2);
    L2=word.charAt(Temp);
    console.log(L2);
    Temp2=word.length-1;
    L3=word.charAt(Temp2);
    console.log(L3);
    R1=word.replace(L1,"_");
    R2=R1.replace(L2,"_");
    R3=R2.replace(L3,"_");
    Q="<h4 id='question'>Q."+ R3 +"</h4>";
    I="<br>answer:<input type='text' id='ans'>";
    b="<br><br><button class='btn-success' onclick='check()'>Check</button>";
    Row=Q+I+b;
    document.getElementById("output").innerHTML=Row;
    document.getElementById("word").value="";
}
anst="player2";
    quet="player1";
function check()
{
    get_answer=document.getElementById("ans").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case-"+answer);
    if(answer==word)
    {
        if(anst=="player1")
        {
         p1score=p1score+1;
         document.getElementById("p1score").innerHTML=p1score;         
        }
        else
        {
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score;
        }
    }
    if(quet=="player1")
    {
        player_question="player2"
        document.getElementById("player_question").innerHTML="Question Turn-"+p2name;
    }
    else
    {
        quet="player1"
        document.getElementById("player_question").innerHTML="Question Turn-"+p1name;
    }
    if(anst=="player1")
    {
        anst="player2"
        document.getElementById("player_answer").innerHTML="Answer Turn-"+p2name;
    }
    else
    {
        anst="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn-"+p1name;
    }
    document.getElementById("output").innerHTML="";
}