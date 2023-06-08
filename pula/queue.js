var questionTree = function (selector) {

    var nowQuestion,
        arrayQuestions = [],
        self = this,
        select = document.querySelector(selector),

        quest = function (questions, arrAnswer, arrToQuestion) {
            this.question = questions;
            this.arrAnswer = arrAnswer;
            this.arrToQuestion = arrToQuestion;
        };

    this.addQuestion = function (questions, arrAnswer, arrToQuestion) {
        arrayQuestions.push(new quest(questions, arrAnswer, arrToQuestion));
    };

    this.startQuestions = function() {
          var buttonStart = document.createElement('input');
          buttonStart.type = "button";
          buttonStart.className = "btn btn-cta btn-cta__green text-uppercase";
          buttonStart.value = "Начать";
          select.querySelector(".buttons").appendChild(buttonStart);
          nowQuestion = 0;
          buttonStart.addEventListener("click",printQuestion);
     };

    function nextQuestion(event) {
        nowQuestion = +event.target.data;
        printQuestion();
    }

     function printQuestion() {
        select.querySelector(".question").innerHTML = arrayQuestions[nowQuestion].question;
        if(arrayQuestions[nowQuestion].arrAnswer[0] != "end"){
         printButton();
        }else{
            delButton(select.querySelector(".buttons"));
            self.startQuestions();
        }
    }
    
    function printButton(){
        var q = arrayQuestions[nowQuestion].arrAnswer.length,
            selectButton = select.querySelector(".buttons");
            delButton(selectButton);
        for(var i = 0; i < q; i++){
            var val = arrayQuestions[nowQuestion].arrAnswer[i],
                nxt = arrayQuestions[nowQuestion].arrToQuestion[i],
                newButton = document.createElement('input');
                newButton.type = "button";
                newButton.className = "btn btn-cta btn-cta__green text-uppercase";

                newButton.data = nxt;
                newButton.value = val;
                newButton.addEventListener("click",nextQuestion);
            selectButton.appendChild(newButton);
        }
    }

    function delButton(selector){
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }
};
var question = new questionTree(".questionTree");

question.addQuestion("Весна уже?", ["Yes","No", "Maybe"], ["1", "2", "8"]);
question.addQuestion("Погода хорошая?", ["Yes","No"], ["3", "4"]);
question.addQuestion("ЯваСкрипт выучил?", ["Yes","No"], ["5", "6"]);
question.addQuestion("Катаешь на велике?", ["Yes","No", "NO!"], ["7", "8", "8"]);
question.addQuestion("Учишь ждеэс?", ["Yes","No"], ["7", "8"]);
question.addQuestion("Програмишь?", ["Yes","No"], ["7", "8"]);
question.addQuestion("А учишь?", ["Yes","No"], ["7", "8"]);
question.addQuestion("Молодец", ["end"]);
question.addQuestion("Зря", ["end"]);

question.startQuestions();
