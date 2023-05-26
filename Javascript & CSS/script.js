//Html Elements 
var Quizbody = document.getElementById("quiz");
var ResultsEl = document.getElementById("Results");
var ScoreEl = documetn.getElementById("finalscore");
var gameoverdiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quiztimer = document.getElementById("timer");
var startquizButton = document.getElementById("beginbtn");
var startquizdiv = document.getElementById("Start");
var Scorecontainer = document.getElementById("Scorecontainer");
var Scorediv = document.getElementById("Scorename")
var Scoreinputname = document.getElementById("Highscore-score");
var Endbutton = document.getElementById("Endbutton");
var submitscorebtn = document.getElementById("submityourscore");
var Highscoredisplayscore = document.getElementById("Highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//Quiz questions
var quizQuestions = [{
    question: " What is the difference between Java & JavaScript? choose wisely!",
    choiceA: "Java is an OOP programming language while Java Script is an OOP scripting language.",
    choiceB: "Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only.",
    choiceC: "Java code needs to be compiled while JavaScript code are all in text.",
    choiceD: "All of the Above",
    correctAnswer: "d"},
    {
     question: "what does JS stand for?",
     choiceA: "Junior Script",
     choiceB: "Java Syntax",
     choiceC: "JavaScript",
     choiceD: "None of the above",
     correctAnswer: "c"},

    {
     question: "How Do You Add Comments to JavaScript Code? ",
     choiceA: "!",
     choiceB: "Add comment",
     choiceC: "//",
     choiceD: "/?",
     correctAnswer: "c" },
    {
     question: "Whats The Difference Between Undeclared & Undefined Variables?",
     choiceA: "There is no difference between Undeclared and Undefined Variables",
     choiceB: "An undeclared variable has not been declared anywhere in the code, so said variable does not exist. If you try to read an undeclared variable, JavaScript throws an error. An undefined variable has been declared in the program, but no value has been assigned. This means the variable exists, but its value is yet to be defined.",
     choiceC: "choice B",
     choiceD: "choice B & C",
     correctAnswer: "d"},
    { 
     question: "console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());",
     choiceA: "bananaa",
     choiceB: "baaa",
     choiceC: "banana",
     choiceD: "ananas",
     correctAnswer: "c"},
     
     { question: "What does JSON stand for in Javascript",
     choiceA: "Java Script Object Notation",
     choiceB: "Java Script Object Node",
     choiceC: "Java Style Objector Notation",
     choiceD: "Java Script Object Notator",
     correctAnswer: "a"},

     { question: "What is a Scope in Javascript",
     choiceA: "Mouthwash",
     choiceB: "Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block.",
     choiceC: "Scope in Java script refers to the previous context of code, which determines the accessibility of variables to Javascript. The two types of scope are local and global: Global variables are those declared outside of a block.Local Variables are those declared inside of a block.",
     choiceD: "Scope in Java script refers to the previous context of code, which determines the accessibility of variables to Javascript. The two types of scope are local and Universal: Universal variables are those declared outside of a block.Local Variables are those declared inside of a block.",
     correctAnswer: "b"},



];

//other variables

var finalQuestionIndex = quizQuestions.length;
var currentQuestionindex= 0;
var timeleft = 76;
var timeInterval;
var score = 0;
var correct;

function generateQuizQuestion(){
    gameoverdiv.style.display = "none";
    if(currentQuestionindex === finalQuestionIndex){
        return showscore();
    }
    var currentQuestion = quizQuestions[currentQuestionindex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "<p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

function startQuiz(){
    gameoverdiv.style.display = "none";
    startquizdiv.style.display = "none";
    generateQuizQuestion();

    timeInterval = setInterval(function() {
        timeleft--;
        quiztimer.textContent = "TIME LEFT: " + timeleft;

        if(timeleft === 0) {
            clearInterval(timeInterval);
            showscore();
        
        }
    }, 1000);
    Quizbody.style.display = "block";   
}

function showscore(){
    Quizbody.style.display = "none ";
    startquizdiv.style.display ="none";
    generateQuizQuestion();

    //timer 
    timeInterval = setInterval(function() {
        timeleft --;
        quiztimer.textcontent = "Time remaining" + timeleft;

        if(timeleft === 0) {
            clearInterval(timeInterval);
            showscore();
        }
    }, 1000);
    Quizbody.style.display = "block";
}

function showScore(){
    Quizbody.style.display = "None";
    gameoverdiv.style.display = "Flex";
clearInterval(timeInterval);
highscoreinputname.value = "",
finalscoreEL.innerHTMl = "you got" + score + "out of" quizQuestions.length + "correct!";
}

submitscorebtn.addEventListener("click" function highschore(){


    if(highscoreinputname.value === ""){
        alert("Initials cannot be blank");
        return false;

    }else{
        var savedhighscores = JSON.parse(localStorage.getitem("savedhighscores"))|| [];
        var currentUser = highscoreinputname.value.trim();
        var currentHighscore = {
            name: currentUser,
            score : score
        };

        gameoverdiv.style.display = "none";
        scorecontainer.style.display = "flex";
        Scorediv.style.display = "block";
        Endbutton.style.display = "flex"

        savedhighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedhighscores));
        generateHighscores();
    }
});

function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textcontent = "";
    Highscoredisplayscore.textcontent = "";
}

function replayQuiz(){
    scorecontainer.style.display = "none";
    gameoverdiv.style.display = "none";
    startquizdiv.style.display = "flex";
    timeleft = 76;
    score = 0;
    currentQuestionindex = 0;
}

function checkAnswer(answer){
    correct = quizQuestions[currentQuestionindex.correctAnswer]{
        score++;
        alert("That Is Correct!");
        currentQuestionindex++;
        generateQuizQuestion();
    }else if (answer !== correct && currentQuestionindex !== finalQuestionIndex){
        alert("That is Incorrect.")
        currentQuestionindex++;
        generateQuizQuestion();
    }else{
        showScore();
    }
}

startquizButton.addEventListener("click",startQuiz);