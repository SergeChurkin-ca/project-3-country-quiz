const myQuestions = [{
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





function filtering(countries) {

    let filteredcountry = countries.filter((x) => x.weather.includes('mild') ? x.name : '')
        // return filteredcountry[0].name
    document.getElementById('main').innerHTML = filteredcountry.map((x) => x.name)
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results')
const submitBtn = document.getElementById('submit');

function buildquiz() {
    const output = [];
    myQuestions.forEach((currentquestion, questionNumber) => {
        const answers = [];
        for (letter in currentquestion.answers) {
            console.log(currentquestion.category)
            answers.push(

                `
                <div class="wrapper question-wrapper">
                    <ul>
                        <label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentquestion.answers[letter]}
                            <br>
                        </label>
                    </ul>
                    
                </div>
                `
            )
        }
        output.push(

            `
            <div class="wrapper">
                <div class="question"><h2> ${currentquestion.question}</h2> </div>
                <div class="wrapper question-wrapper">
                    <div class="answers">
                        <ul>
                            <li> ${answers.join('')} </li>
                        </ul>
                    </div>
                    <div class="img-container">
                    </div>
                    <img src="https://source.unsplash.com/450x450/?${currentquestion.category}">
                </div>
            </div>
            `
        )
    })
    quizContainer.innerHTML = output.join('')
}

function showResults() {

    const answerContainers = quizContainer.querySelectorAll('.answers');
    let result = []
    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector)).value;
        result.push(userAnswer)

        // return resultsContainer.innerHTML = (myQuestions.map((x) => x.pairs[userAnswer]))

        // result.push((myQuestions.map((x) => x.pairs[userAnswer])))
        // result.push(myQuestions.map((x) => x.pairs[result]))

        // return resultsContainer.innerHTML = myQuestions.map((x) => x.answers)

        // return resultsContainer.innerHTML = myQuestions.map((x) => x.pairs[result])

    });
    // console.log("answers", result)
    // console.log(myQuestions.map((x) => x.pairs))
    // console.log(result)


    // for (let i = 0; i <= result.length; i++) {
    //     for (let value of Object.values(myQuestions.map((x) => x.pairs[result[i]]))) {
    //         console.log(value)
    //     }
    // }

    console.log(result)
    let findingPair = []
    for (let i = 0; i < result.length; i++) {

        findingPair.push(myQuestions[i].pairs[result[i]])
            // console.log("finding paris", myQuestions.map((x) => x.pairs[result[i]]))
            // console.log(findingPair)
            // return resultsContainer.innerHTML = `<p>Hello<p>`

    }

    // return findingPair


    // resultsContainer.innerHTML = `${findingPair}`

    console.log(findingPair.sort())

    const map = findingPair.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    // console.log('keys', [...map.keys()])
    // console.log('values', [...map.values()])
    console.log('entries', [...map.entries()])

    // console.log('the winning country is', [...map.entries()].filter((x) => x[1] === Math.max(...map.values())))
    let winningCountry = [...map.entries()].filter((x) => x[1] === Math.max(...map.values()))[0]

    console.log('winning country is', winningCountry[0])

    // console.log('final resilt', sortedArray)
    return resultsContainer.innerHTML = `winning ocuntry is ${winningCountry[0]}`
}


buildquiz();



submitBtn.addEventListener('click', showResults)