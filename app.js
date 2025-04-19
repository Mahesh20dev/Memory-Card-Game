const section=document.querySelector("section");
const playerLivesCount=document.querySelector("span");
let playerLives=8;

const scores=document.querySelector(".Scores");
let playerScore=0;


playerLivesCount.innerText=playerLives;
scores.innerText=`Your Score: ${playerScore}`;



const getData = () =>  [
      { imgSrc: "./public/a.jpg", id: 1, name: "a" },
      { imgSrc: "./public/b.jpg", id: 2, name: "b" },
      { imgSrc: "./public/c.jpg", id: 3, name: "c" },
      { imgSrc: "./public/d.jpg", id: 4, name: "d" },
      { imgSrc: "./public/e.jpg", id: 5, name: "e" },
      { imgSrc: "./public/f.jpg", id: 6, name: "f" },
      { imgSrc: "./public/g.jpg", id: 7, name: "g" },
      { imgSrc: "./public/h.jpg", id: 8, name: "h" },
      { imgSrc: "./public/a.jpg", id: 9, name: "a" },
      { imgSrc: "./public/b.jpg", id: 10, name: "b" },
      { imgSrc: "./public/c.jpg", id: 11, name: "c" },
      { imgSrc: "./public/d.jpg", id: 12, name: "d" },
      { imgSrc: "./public/e.jpg", id: 13, name: "e" },
      { imgSrc: "./public/f.jpg", id: 14, name: "f" },
      { imgSrc: "./public/g.jpg", id: 15, name: "g" },
      { imgSrc: "./public/h.jpg", id: 16, name: "h" },
    ];

const randomize = ()=>{
    const cardData = getData();
    cardData.sort(()=>Math.random()-0.5);
    return cardData;
  
};

const cardGenerator=()=>{
    const cardData=randomize();
    cardData.forEach((item)=>{
    const card=document.createElement("div");
    const face=document.createElement("img");
    const back=document.createElement("div");

    card.classList="card";
    face.classList="face";
    back.classList="back";

    face.src=item.imgSrc;
    card.setAttribute('name',item.name)

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click",(e)=>{
        card.classList.toggle("toggleCard");
        checkCards(e);
    })

    });
}

const checkCards=(e)=>{
    const clickedCard=e.target;
    clickedCard.classList.add('flipped');
    const flippedCards=document.querySelectorAll('.flipped');
    const toggleCard=document.querySelectorAll(".toggleCard");
    
    

    if (flippedCards.length === 2){
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name"))
            {
                console.log("match");
                flippedCards.forEach((card)=>{
                    card.classList.remove("flipped");
                    card.style.pointerEvents="none";
                    playerScore++;
                    scores.innerText=`Your Score: ${playerScore}`;


                })
            }else{
                console.log("no match")
                flippedCards.forEach(card=>{
                    card.classList.remove('flipped');
                    setTimeout(()=>card.classList.remove("toggleCard"),1000);

                })
                playerLives--;
                playerLivesCount.innerText=playerLives;
                if (playerLives===0){
                    
                    reset1("👎🏼😕No more moves!Start New Game");
                    
            
                }
            }
    }
    if (toggleCard.length===16){
        reset("👍🏼😁You Won");
    }
}

const reset = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  
  section.style.pointerEvents = "none";
  time(60);

 

  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });

  playerLives = 8;
  playerScore = 0;
  playerLivesCount.innerText = playerLives;
  scores.innerText = `Your Score: ${playerScore}`;
  setTimeout(() => window.alert(text), 100);
 
  
};

const reset1 = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  
  section.style.pointerEvents = "none";
  

 

  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });

  playerLives = 8;
  playerScore = 0;
  playerLivesCount.innerText = playerLives;
  scores.innerText = `Your Score: ${playerScore}`;
  setTimeout(() => window.alert(text), 100);
 
  
};

const time =(e)=>{
   
    let timing=document.querySelector(".time")
    let timerInterval = setInterval(() => {
      e--;
      timing.innerText=(`Time remaining: ${e} seconds`);
  
      if (e === 0) {
        clearInterval(timerInterval);
        reset("Time up try again")
        console.log("Game Over");
       
      }
    }, 1000);

}

let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    const reset = () => {
        let cardData = randomize();
        let faces = document.querySelectorAll(".face");
        let cards = document.querySelectorAll(".card");
        
        section.style.pointerEvents = "none";
     
      
       
      
        cardData.forEach((item, index) => {
          cards[index].classList.remove("toggleCard");
          setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
          }, 1000);
        });
      
        playerLives = 8;
        playerScore = 0;
        playerLivesCount.innerText = playerLives;
        scores.innerText = `Your Score: ${playerScore}`;
       
       
        
      };
      reset();
})



cardGenerator();
window.addEventListener("load",()=>{
    
    time(60);
})





