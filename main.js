console.log('javascript file loaded correctly') //verify js file is properly linked to index
let index = 0; //this will be the i that increases incrementally
let userResponses = []


//This is the same question holder from the orig.
const levelOneQs = [
  {
    question: "This is the first question",
    ansA: 'this is Answer A-Q1',
    ansB: "this is Answer B-Q1",
    ansC: "this is Answer C=Q1",
    ansD: "this is Answer D-Q1",
    correct: 'b'
  },

    {
    question: "This is the second question",
    ansA: 'this is Answer A-Q2',
    ansB: "this is Answer B-Q2",
    ansC: "this is Answer C-Q2",
    ansD: "this is Answer D-Q2",
    correct:'a'
  },

  {
    question: "This is the third question",
    ansA: "this is Answer A-Q3",
    ansB: "this is Answer B-Q3",
    ansC: "this is Answer C-Q3",
    ansD: "this is Answer D-Q3",
    correct: 'd'
  },
];
console.log('all the qs ->',levelOneQs);

function displayQuestion() {
  console.log('-- inside displayQuestion --')
//Need to determine how it will know which question to display
//so.....define a variable that is going to be the question
let randoQuestion = levelOneQs[index];
console.log(randoQuestion);

//named this because eventually this will be randomized
//see original code randomization
//eventually more than one level

//SELECT
//ok--finally discovered that this shit is easier to
//learn with more random random variable, class, and id names

let apple = document.querySelector('#theQuestion');
let orange = document.querySelector('#one');
let pear = document.querySelector('#two');
let grape = document.querySelector('#three');
let kiwi = document.querySelector('#four');

// console.log(apple, orange, pear, grape, kiwi); fuck this it's not working and i dont' know why

//MODIFY
apple.innerHTML = randoQuestion.question;
orange.innerHTML = randoQuestion.ansA;
pear.innerHTML = randoQuestion.ansB;
grape.innerHTML = randoQuestion.ansC;
kiwi.innerHTML = randoQuestion.ansD;
//the first block tells it that we are going to need to pick up
// the HTML elements named theQuestion, One, Two, Three, Four.
// once those are held in variable land, the second block tells it that for each of those
// 5 things above we are going to be changing the innerHTML.
// We are changing the innerHTML of each variable to pieces of the array as indicated by
// whatever number INDEX is.
//also need to set an upper limit for how many times to lopp through the array.

//APPEND
//nothing to append

};
displayQuestion();
//now do event listener



//create function to display correct answer separate from the display question function.
//then associate with event listener.
function correctOnScreen() {
  let displayCorrect = levelOneQs[index].correct;
  console.log(displayCorrect);
  let pineapple = document.querySelector('#halfEmpty');
  pineapple.innerHTML = displayCorrect;
};

function checkCorrectAnswer(event) {
  // called when an answer is clicked
  // goes to original question. looks for the answer
  // looks at the answer the user clicked
  // gives feedback on right or wrong
}


let frisbee = document.querySelector('#nextbtn');
frisbee.addEventListener('click', function(event){
  // console.log('event.target -> ',event.target);
  // when we click next...
  // display the next question
  // so.. increment index++
  // if the counters index
  if(index+1 < levelOneQs.length) {
    index++;
    //had to add the +1 to index so that it would display no more questions after the right number of clicks
    // console.log(index, levelOneQs.length);
    document.querySelector('#halfEmpty').innerHTML = '';
    displayQuestion();
  } else console.log('no more questions');
});

let ball = document.querySelector('#giveup');
ball.addEventListener('click', function(event) {
  // console.log('event.target -> ', event.target);
  setTimeout(function() {
    correctOnScreen();
  }, 1000)
})
