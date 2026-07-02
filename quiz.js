const questions =[
{
questions:"which is the largest anaimal in the world",
answers:[
    {Text:"skark",correct:false},
    {Text:"li",correct:true},
    {Text:"snake",correct:false},   
     {Text:"zebra",correct:false},
]
},
{
    questions:"whichis the best foot ball team",
    answers:[
        {Text:"aprfc",correct:false},
        {Text:"fb",correct:true},
        {Text:"realm",correct:false},   
         {Text:"city",correct:false},
    ]
    },
    {
        questions:"which is the largest county  in the world",
        answers:[
            {Text:"china",correct:false},
            {Text:"usa",correct:false},
            {Text:"rusia",correct:true},   
             {Text:"india",correct:false},
        ]
        },
        {
            questions:"which is the largest oceanin the world",
            answers:[
                {Text:"pacific",correct:true},
                {Text:"ai",correct:true},
                {Text:"india",correct:false},   
                 {Text:"altal",correct:false},
            ]
            },

]
const questionElement=document.getElementById("question");
const answerbutton=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("-btn");

let currentquestionindex=0;
let score=0;

function startQuiz(){
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="next";
    showquestion();
}
 function showquestion(){
resetstate()
    let currentquestion=questions[currentquestionindex];
    let questionNO=currentquestionindex+1;
    questionElement.innerHTML=questionNO +"."+currentquestion.Question;
    currentquestion.answers.forEach(answer =>{
        const button =document.createElement(button);
        button.innerHTML=answer.text;
        button.classlist.add(btn);
        answerbutton.appendChild(button);
    }
)
function resetstate(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
 }
 startQuiz();