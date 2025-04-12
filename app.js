const quotePara = document.querySelector(".quote-para");
const genQuoteBtn = document.querySelector(".gen-quote");

// Array of quotes
const quotes = [
    { content: "Man only likes to count his troubles; he doesn't calculate his happiness.", author: "Fyodor Dostoevsky" },
    { content: "The soul is dyed the color of its thoughts.", author: "Marcus Aurelius" },
    { content: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
    { content: "To live without hope is to cease to live.", author: "Fyodor Dostoevsky" },
    { content: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
    { content: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
    { content: "Pain and suffering are always inevitable for a large intelligence and a deep heart.", author: "Fyodor Dostoevsky" },
    { content: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
    { content: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca" },
    { content: "The mystery of human existence lies not in just staying alive, but in finding something to live for.", author: "Fyodor Dostoevsky" },
    { content: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
    { content: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca" },
    { content: "What is hell? I maintain that it is the suffering of being unable to love.", author: "Fyodor Dostoevsky" },
    { content: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
    { content: "Sometimes even to live is an act of courage.", author: "Seneca" },
    { content: "Taking a new step, uttering a new word, is what people fear most.", author: "Fyodor Dostoevsky" },
    { content: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius" },
    { content: "We suffer more often in imagination than in reality.", author: "Seneca" },
    { content: "Above all, don't lie to yourself.", author: "Fyodor Dostoevsky" },
    { content: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius" },
    { content: "He who is brave is free.", author: "Seneca" },
    { content: "The darker the night, the brighter the stars.", author: "Fyodor Dostoevsky" },
    { content: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius" },
    { content: "True happiness is to enjoy the present, without anxious dependence upon the future.", author: "Seneca" }
];

// Function to generate a random quote
const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quotePara.textContent = `"${randomQuote.content}" - ${randomQuote.author}`;
};

// Add event listener to the button
genQuoteBtn.addEventListener("click", generateRandomQuote);