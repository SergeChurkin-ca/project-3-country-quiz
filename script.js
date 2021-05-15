const myQuestions = [{
        id: 1,
        question: "What is your favourite season?",
        category: "season",
        answers: {
            a: "spring",
            b: "summer",
            c: "fall",
            d: "winter"
        },
        pairs: {
            a: "France",
            b: "Panama",
            c: "Canada",
            d: "Norway"
        }
    },
    {
        id: 2,
        question: "What is your favourite kidn of weather?",
        category: "weather",
        answers: {
            a: "sunny",
            b: "mild",
            c: "hot",
            d: "snowy",
            e: "rainy",
            f: "hot"
        },
        pairs: {
            a: "Panama",
            b: "France",
            c: "Thailand",
            d: "Canada",
            e: "Thailand",
            f: "Thailand"
        }

    },
    {
        id: 3,
        question: "Please chose one of these cuisines",
        category: "cuisine",
        answers: {
            a: "Thai",
            b: "Spanish",
            c: "Moroccan",
            d: "Japanese",
            e: "Indian",
            f: "Italian",
            g: "French",
            h: "Chinese"

        },
        pairs: {
            a: "Thailand",
            b: "Spain",
            c: "Morocco",
            d: "Japan",
            e: "India",
            f: "Italy",
            g: "France",
            h: "China"
        }

    },
    {
        id: 4,
        question: "How spicy do you like?",
        category: "spices",
        answers: {
            a: "I don't eat spicy",
            b: "little",
            c: "mild",
            d: "spicy hot",
            e: "suicide"

        },
        pairs: {
            a: "Canada",
            b: "France",
            c: "Italy",
            d: "Thailand",
            e: "India"
        }
    },
    {
        id: 5,
        question: "What kind of landscape do you prefer",
        category: "landscape",
        answers: {
            a: "desert",
            b: "seaside",
            c: "mountains",
            d: "forest",
            e: "jungle",
            f: "tundra",
            g: "lakeside",
            h: "cityscape"

        },
        pairs: {
            a: "Morocco",
            b: "Thailand",
            c: "France",
            d: "Canada",
            e: "Thailand",
            f: "Canada",
            g: "Canada",
            h: "Japan"
        }
    },
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');

const submitBtn = document.createElement('button');
submitBtn.innerHTML = 'Submit';

function buildquiz() {

    const output = [];

    myQuestions.forEach((currentquestion, questionNumber) => {
        const answers = [];
        for (letter in currentquestion.answers) {

            answers.push(
                `
                <div class="wrapper question-wrapper">
                    <ul>
                        <li>
                            <label class="container"> 
                                <input class="check" type="radio" name="question${questionNumber}" value="${letter}">
                                    ${currentquestion.answers[letter]}
                                    <span class="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
                `
            )
        }


        // next button validation results is added through loop, it's length is checked agains the container id number
        function validation() {

            let validationarray = []
            for (let i = 0; i < document.querySelectorAll('input:checked').length; i++) {
                validationarray.push(document.querySelectorAll('input:checked')[i].value)
            }
            // console.log('line:162 validation array length:', validationarray.length)
            // console.log('line: 163 finding actual id of qeuestion again', parentNode.parentNode.id)

            // console.log('check intermidiery results, line: 166', validationarray.length == parentNode.parentNode.id)

            if (validationarray.length != parentNode.parentNode.id) {
                alert('please check your inputs')
                    // console.log('check again line 166', document.querySelectorAll('input:checked').length)
                    // console.log('getting the wrapper', 'wrapper-' + parentNode.parentNode.id);
                    // console.log(document.getElementsByClassName('wrapper-2'))
                    // return document.getElementById(`wrapper-${parentNode.parentNode.id}`).style.border = 'solid 6px red'

            } else if (validationarray.length == parentNode.parentNode.id) {
                validationarray = []
                    // console.log('delete validation array', validationarray)
                    // console.log('good to go!')

                document.querySelector(`.wrapper-${parentNode.parentNode.id}`).nextElementSibling.style = 'display: block; opacity: 1;';
                document.querySelector(`.wrapper-${parentNode.parentNode.id}`).style = 'display: none; opacity: 0;';
            }
        }

        // end of next button validation
        // quiz questions 
        output.push(

            `
            <div class="wrapper wrapper-${currentquestion.id} wrapper-output">
                <div class="question" id="question${currentquestion.id}">
                    <h2>${currentquestion.question}</h2> 
                </div>
                
                <div class="wrapper question-wrapper" id="wrapper-${currentquestion.id}">
                        <div class="answers" id="${currentquestion.id}">
                        
                            <ul>
                                <li> ${answers.join('')} </li>
                               
                            </ul>
                            <a href="#question${currentquestion.id+1}" class="button-next" id="button-next-${currentquestion.id}">
                                <button type="submit" class="next" onclick="return ${validation}()">
                                Next
                                </button>
                            </a> 

                        </div>
                        <div class="img-container">
                            <img src="https://source.unsplash.com/450x450/?${currentquestion.category}">
                        </div>
                </div>

               
            </div>
            `
        )

        // end of quiz questions


    })


    quizContainer.innerHTML = output.join('')

    // not showing very last next button on  last quiz question
    let lastButton = document.getElementById("button-next-5")
    if (lastButton.id === "button-next-5") {
        lastButton.style.display = "none"
    }
}

// display questions dynamically
function showResults() {

    // very last error handler to verify last question iput
    window.onerror = function() {
        alert('Please check you inputs')
        return true;
    }

    const answerContainers = quizContainer.querySelectorAll('.answers');
    let result = []

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector)).value;
        result.push(userAnswer)

    });



    let findingPair = []
    for (let i = 0; i < result.length; i++) {
        findingPair.push(myQuestions[i].pairs[result[i]])
    }


    const map = findingPair.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    // console.log('entries', [...map.entries()])

    let winningCountry = [...map.entries()].filter((x) => x[1] === Math.max(...map.values()))[0]

    console.log('winning country is', winningCountry[0])


    return document.body.innerHTML = `
   
        <div class="wrapper answer-wrapper">
            <h2>You Got: ${winningCountry[0]}</h2>
            <div class="answer-img-container wrapper">
                <img class="country-img" src="https://source.unsplash.com/450x751/?${winningCountry[0]}+landmark" alt="Random placeholder image of landmark in ${winningCountry[0]}">
                <img class="country-img" src="https://source.unsplash.com/450x752/?${winningCountry[0]}+people" alt="People of ${winningCountry[0]}">
                <img class="country-img" src="https://source.unsplash.com/450x753/?${winningCountry[0]}+nature" alt="Nature of ${winningCountry[0]}">
            </div>
            <a href="index.html" id="reset"><button type="submit">Start over</button></a>
        </div>
  
    `
}

// end of showresults function
buildquiz();

// adding submit button dynamically on the last question
document.getElementById('wrapper-5').insertAdjacentElement('afterend', submitBtn)
submitBtn.addEventListener('click', showResults)