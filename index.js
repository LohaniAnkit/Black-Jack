let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let sum = 0

let cards = []

let hasBlackJack = false
let isAlive = false

let message = ""

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

    let randomCard = Math.floor(Math.random()*13 ) + 1

    if(randomCard === 1)
        return 11

    else if(randomCard === 11 || randomCard === 12 || randomCard === 13)
        return 10

    else
        return randomCard
}

function startGame() {

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]

    isAlive = true
    renderGame()

    console.log(isAlive)
    console.log(hasBlackJack)

}

function renderGame() {

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } 
    
    else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } 
    
    else {
        message = "You're out of the game! "
        isAlive = false
    }

    messageEl.innerText = message
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "

    for (let i = 0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {

    if(isAlive === true && hasBlackJack === false){
        var newCard = getRandomCard()
        cards.push(newCard)

        sum += newCard
        renderGame()
    }
    
}




