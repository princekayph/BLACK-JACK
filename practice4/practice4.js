let player = {
    name: "Prince",
    chips: 40
}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards =[firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": R" + player.chips

function getRandomCard(){
    
    let randomCard = Math.floor(Math.random() *13) + 1
    if (randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}
 function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    renderGame()
 }
 function renderGame(){
    if (sum <= 20){
        message = "do you want to draw a new card"
        isAlive = true
    } else if (sum === 21){
        message = "you've got blackjack"
        hasBlackJack = true
    } else {
        message = "you're out"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "
    for (let i = 0 ; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
 }

 function newCard(){

    if (isAlive = true && sum < 21){
       let card = getRandomCard()

       sum = sum + card

       cards.push(card)
       renderGame()
    }
    
 }


 
 

