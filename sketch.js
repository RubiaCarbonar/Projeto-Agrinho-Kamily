let questions = [];
let currentQuestion = 0;
let score = 0;
let feedback = "";
let feedbackTime = 0;

function setup() {
  createCanvas(800, 400);
 
  // Cria as perguntas
  questions = [
    {
      question: "No campo se cultiva trigo",
      answer: true
    },
    {
      question: "Na cidade se cultiva café?",
      answer: false
    },
    {
      question: "Milho no campo se cultiva mais?",
      answer: true
    },
    {
      question: "Na cidade se cultiva cenouras?",
      answer: true
    },
    {
      question: "O campo é caracterizado por uma menor densidade populacional do que a cidade?",
      answer:true 
    },
     {
      question:"A vida no campo está mais ligada à natureza?",
      answer:true 
    },
    {
      question: "O campo possui um menor acesso à tecnologia e à internet do que a cidade?",
      answer:true  
},
  ];
}

function draw() {
  background(245);
 
  if (currentQuestion < questions.length) {
    // Mostra a pergunta atual
    textSize(24);
    textAlign(CENTER);
    fill(0);
    text(questions[currentQuestion].question, width/2, height/3);
   
    // Desenha botões
    drawButton("Verdadeiro", width/2 - 120, height/2 + 50, color(0, 200, 0));
    drawButton("Falso", width/2 + 20, height/2 + 50, color(200, 0, 0));
   
    // Mostra feedback
    if (feedback !== "") {
      textSize(32);
      fill(feedback === "Correto!" ? color(0, 200, 0) : color(200, 0, 0));
      text(feedback, width/2, height/2 + 150);
     
      // Avança após 1 segundo
      if (millis() - feedbackTime > 1000) {
        currentQuestion++;
        feedback = "";
      }
    }
  } else {
    // Tela final
    textSize(32);
    fill(0);
    text("Fim do Jogo!", width/2, height/3);
    text("Pontuação: ${score}/${questions.length}, width/2, height/2");
  }
}

function drawButton(label, x, y, col) {
  fill(col);
  rect(x, y, 100, 50, 5);
  fill(255);
  textSize(20);
  text(label, x + 50, y + 30);
}

function mousePressed() {
  if (currentQuestion >= questions.length) return;
 
  let trueButton = {x: width/2 - 120, y: height/2 + 50, w: 100, h: 50};
  let falseButton = {x: width/2 + 20, y: height/2 + 50, w: 100, h: 50};
 
  if (feedback === "") {
    // Verifica clique no botão Verdadeiro
    if (mouseX > trueButton.x && mouseX < trueButton.x + trueButton.w &&
        mouseY > trueButton.y && mouseY < trueButton.y + trueButton.h) {
      checkAnswer(true);
    }
   
    // Verifica clique no botão Falso
    if (mouseX > falseButton.x && mouseX < falseButton.x + falseButton.w &&
        mouseY > falseButton.y && mouseY < falseButton.y + falseButton.h) {
      checkAnswer(false);
    }
  }
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
    feedback = "Correto!";
  } else {
    feedback = "Errado!";
  }
  feedbackTime = millis();
}