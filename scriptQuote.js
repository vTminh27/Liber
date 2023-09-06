const quoteText = document.querySelector(".quote"),
      quoteBtn = document.querySelector("button"),
      authorName = document.querySelector(".name"),
      speechBtn = document.querySelector(".sound"),
      copyBtn = document.querySelector(".copy"),
      synth = speechSynthesis;

const quotes = [
    {content: "Don't let a bad day make you feel like a bad life.", author: "Unknown"},
    {content: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    // Add more quotes as needed
];

function randomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteText.innerText = selectedQuote.content;
    authorName.innerText = selectedQuote.author;
}

speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);

// Then call the randomQuote function at the end of the script
randomQuote();