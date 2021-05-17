const myQuestions = [{
        id: 1,
        question: "What is your favourite season?",
        category: "seasons",
        answers: {
            a: "spring",
            b: "summer",
            c: "fall",
            d: "winter"
        },
        pairs: {
            a: "France",
            b: "Thailand",
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
            c: "cloudy",
            d: "snowy",
            e: "rainy",
            f: "hot"
        },
        pairs: {
            a: "Panama",
            b: "France",
            c: "England",
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
            a: "seafood",
            b: "asian",
            c: "sausages",
            d: "meats",
            e: "oatmeal",
            g: "french"

        },
        pairs: {
            a: "Thailand",
            b: "Thailand",
            c: "Germany",
            d: "Canada",
            e: "England",
            f: "France"
        }

    },
    {
        id: 4,
        question: "How spicy do you like?",
        category: "spices",
        answers: {
            a: "none",
            b: "little",
            c: "mild",
            d: "spicy hot",
            e: "suicide"

        },
        pairs: {
            a: "Englang",
            b: "France",
            c: "Germany",
            d: "Thailand",
            e: "Thailand"
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
            f: "Norway",
            g: "Canada",
            h: "England"
        }
    },
    {
        id: 6,
        question: "What are the most enjoyable ways of life?",
        category: "lifestyle",
        answers: {
            a: 'secluded',
            b: 'vibrant city life',
            c: 'adventurous',
            d: 'rural',
            e: 'journeys and outdoors',
            f: 'island style',
            g: 'hardworking'

        },
        pairs: {
            a: 'Canada',
            b: 'England',
            c: 'Morocco',
            d: 'Canada',
            e: 'France',
            f: 'Thailand',
            g: 'Germany'
        }
    },
    {
        id: 7,
        question: "What type of house makes you comfortable?",
        category: "house",
        answers: {
            a: "condominium",
            b: "ocean villa",
            c: "town house",
            d: "jungle hut",
            e: "city appartment",
            f: "spacious estate with garden",
            g: "farm house",
            h: "wood log house"

        },
        pairs: {
            a: 'Panama',
            b: 'Thailand',
            c: 'Canada',
            d: 'Thailand',
            e: 'Germany',
            f: 'Canada',
            g: 'Canada',
            h: 'Norway'
        }
    },
    {
        id: 8,
        question: "Where is most likely you’ll find yourself on a Sunday morning after the wild party?",
        category: "party",
        answers: {
            a: "place of worship",
            b: "home, sweet home",
            c: "parent's house",
            d: "police station",
            e: "hospital",
            f: "airport",
            g: "beach",
            h: "in the woods"

        },
        pairs: {
            a: 'Germany',
            b: 'Canada',
            c: 'England',
            d: 'France',
            e: 'Morocco',
            f: 'Panama',
            g: 'Thailand',
            h: 'Norway'
        }
    },
    {
        id: 9,
        question: "What type of people annyos you?",
        category: "people",
        answers: {
            a: "lazy",
            b: "talkative",
            c: "uncultured",
            d: "rude",
            e: "fancy",
            f: "silent",
            g: "overly polite",
            h: "slow"

        },
        pairs: {
            a: 'Germany',
            b: 'Norway',
            c: 'England',
            d: 'Canada',
            e: 'Morocco',
            f: 'Panama',
            g: 'Thailand',
            h: 'Germany'
        }
    },
    {
        id: 10,
        question: "What would you wear to a holiday party?",
        category: "fashion",
        answers: {
            a: "arty fashion",
            b: "casual",
            c: "chic fashion",
            d: "sporty",
            e: "loose long dress/robe",
            f: "bright beach wear",
            g: "swimwear",
            h: "vintage"

        },
        pairs: {
            a: 'Germany',
            b: 'Norway',
            c: 'England',
            d: 'Canada',
            e: 'Morocco',
            f: 'Panama',
            g: 'Thailand',
            h: 'France'
        }
    },
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');

const submitBtn = document.createElement('button');
submitBtn.innerHTML = 'Submit';


let modal = document.getElementById("Mymodal");
modal.style.display = 'none'

function buildquiz() {

    const output = [];

    myQuestions.forEach((currentquestion, questionNumber) => {
        const answers = [];
        for (letter in currentquestion.answers) {

            answers.push(
                `
                <div class="wrapper question-container">
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
        // Modal

        // next button validation results is added through loop, it's length is checked agains the container id number
        function validation() {

            let validationarray = []
            for (let i = 0; i < document.querySelectorAll('input:checked').length; i++) {
                validationarray.push(document.querySelectorAll('input:checked')[i].value)
            }
            if (validationarray.length != parentNode.parentNode.id) {
                modal.style.display = 'block'
                modal.onclick = () => {
                    modal.style.display = 'none'
                }
            } else if (validationarray.length == parentNode.parentNode.id) {
                validationarray = []
                modal.style.display = 'none'
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
                    <h3>${currentquestion.question} <span>question ${currentquestion.id} of ${myQuestions.length}</span></h3> 
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
    let lastButton = document.getElementById(`button-next-${myQuestions.length}`)
    if (lastButton.id === `button-next-${myQuestions.length}`) {
        lastButton.style.display = "none"
    }
}

// display questions dynamically
function showResults() {

    // very last error handler to verify last question iput
    window.onerror = function() {
        modal.style.display = 'block'
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
            <h3>Most Likely You Got: ${winningCountry[0]}</h3>
            <div class="answer-img-container wrapper">
                <img class="country-img" src="https://source.unsplash.com/450x751/?${winningCountry[0]},landmark" alt="Random placeholder image of landmark in ${winningCountry[0]}">
                <img class="country-img" src="https://source.unsplash.com/450x752/?${winningCountry[0]},people" alt="Random placeholder image of landmark in ${winningCountry[0]}">
                <img class="country-img" src="https://source.unsplash.com/450x753/?${winningCountry[0]},nature" alt="Random placeholder image of landmark in ${winningCountry[0]}">
            </div>
            <a href="index.html" id="reset"><button type="submit">Start over</button></a>
        </div>
  
    `
}

// end of showresults function
buildquiz();

// adding submit button dynamically on the last question
document.getElementById(`${myQuestions.length}`).insertAdjacentElement('beforeend', submitBtn)
submitBtn.addEventListener('click', showResults)