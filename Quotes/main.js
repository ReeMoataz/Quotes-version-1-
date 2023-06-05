
var allquotes=[
{qotecontent:"'Be yourself; everyone else is already taken'" , autor:" -Oscar Wilde"},
{qotecontent:"'A room without books is like a body without a soul.'" , autor:"-Marcus Tullius Cicero"},
{qotecontent:"'You only live once, but if you do it right, once is enough.'" , autor:"-Mae West"},
{qotecontent:"'Without music, life would be a mistake.'" , autor:"-Friedrich Nietzsche"},
{qotecontent:"'A day without sunshine is like, you know, night.'" , autor:"-Steve Martin"},
{qotecontent:"'It is never too late to be what you might have been.'" , autor:"-George Eliot"},
]


function genrate() {
    var randomNumber = Math.floor(Math.random() * (allquotes.length));
    document.getElementById("quote").innerHTML = allquotes[randomNumber].qotecontent;
    document.getElementById("author").innerHTML = allquotes[randomNumber].autor;
    
}





function one(){
    console.log("hello 1")
}

one();



function addation(x,y)
{
    var result=x+y;
    console.log(result);
}

addation(8,9)