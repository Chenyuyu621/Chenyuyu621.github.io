

// Function to check trivia answer
function checkTriviaAnswer() {
    const userAnswer = document.getElementById('triviaInput').value;
    const correctAnswer = "1890";
    const resultText = userAnswer === correctAnswer ? "Correct!" : "Incorrect, try again!";
    document.getElementById('triviaResult').textContent = `You guessed: ${userAnswer}. ${resultText}`;
}

// Function to check if the number is a 5-digit integer and odd or even
function checkNumber() {
    const number = document.getElementById('numberInput').value;
    if (number.match(/^\d{5}$/)) {
        const isOdd = parseInt(number) % 2 !== 0;
        document.getElementById('numberResult').textContent = `The number ${number} is ${isOdd ? "odd" : "even"}.`;
    } else {
        document.getElementById('numberResult').textContent = "Please enter a valid 5-digit number.";
    }
}

// Add event listeners to buttons and enable Enter key for inputs
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('triviaButton').addEventListener('click', checkTriviaAnswer);
    document.getElementById('numberButton').addEventListener('click', checkNumber);

    // Enabling enter key to trigger button click for trivia
    document.getElementById('triviaInput').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById('triviaButton').click();
        }
    });

    // Enabling enter key to trigger button click for number check
    document.getElementById('numberInput').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById('numberButton').click();
        }
    });
});

// Create a Howl instance with the sound.
const sound = new Howl({
    src: ['/media/sound1.mp3','/media/sound1.webm'],  

});

// Play the sound when the 'Play' button is clicked.
document.getElementById('play').addEventListener('click', function() {
    sound.play();
});

// Pause the sound when the 'Pause' button is clicked.
document.getElementById('pause').addEventListener('click', function() {
    sound.pause();
});

// Stop the sound when the 'Stop' button is clicked.
document.getElementById('stop').addEventListener('click', function() {
    sound.stop();
});
