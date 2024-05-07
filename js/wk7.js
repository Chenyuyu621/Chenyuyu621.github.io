

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

// Function for lastitem() 

function lastItem(fruits) {
    const outputDiv = document.getElementById('lastItemOutput');
    
    // Display the original array
    outputDiv.innerHTML = `<p>Original Array: [${fruits.join(', ')}]</p>`;

    // Sort the array and get the last item alphabetically
    const sortedFruits = fruits.sort();
    const lastFruit = sortedFruits[sortedFruits.length - 1];

    // Display the last item
    outputDiv.innerHTML += `<p>Last Item Alphabetically: ${lastFruit}</p>`;
}

// Fnuction for sorting user inputs

function sortUserInputs() {
    // Ask user how many categories they want to enter
    let numberOfCategories = prompt("How many items would you like to enter? Choose between 2 and 4.");
    numberOfCategories = parseInt(numberOfCategories);

    // Validate input for number of categories
    while (!numberOfCategories || numberOfCategories < 2 || numberOfCategories > 4) {
        numberOfCategories = parseInt(prompt("Invalid number. Please enter a number between 2 and 4."));
    }

    // Collect categories
    let categories = [];
    for (let i = 0; i < numberOfCategories; i++) {
        let category = prompt(`Enter category ${i + 1} of ${numberOfCategories}:`);
        while (!category) {
            category = prompt(`You did not enter any category, please enter category ${i + 1} of ${numberOfCategories}:`);
        }
        categories.push(category);
    }

    // Collect items for each category
    let items = [];
    for (let i = 0; i < categories.length; i++) {
        let item = prompt(`Enter an item for the category '${categories[i]}':`);
        while (!item) {
            item = prompt(`You did not enter any item, please enter an item for the category '${categories[i]}':`);
        }
        items.push({ category: categories[i], item: item });
    }

    // Sort items alphabetically by the item name
    items.sort((a, b) => a.item.localeCompare(b.item));

    // Display sorted items and categories
    const outputDiv = document.getElementById('userInputsOutput');
    outputDiv.innerHTML = `<p>You chose to submit items for ${numberOfCategories} categories.</p><ul>`;
    items.forEach(entry => {
        outputDiv.innerHTML += `<li>${entry.category}: ${entry.item}</li>`;
    });
    outputDiv.innerHTML += `</ul>`;
}

// Function for Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
const myLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Sales Figures',
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            data: [
                { x: 'January', y: 150 },
                { x: 'February', y: 200 },
                { x: 'March', y: 180 },
                { x: 'April', y: 220 },
                { x: 'May', y: 170 },
                { x: 'June', y: 230 }
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Function for pie chart

const piectx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(piectx, {
    type: 'pie',
    data: {
        labels: ['AAPL', 'GOOGL', 'META', 'PLTR'],
        datasets: [{
            label: 'Market Share',
            data: [300, 50, 100, 150],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map and set its view to your chosen geographical coordinates and a zoom level
    var map = L.map('map').setView([48.8584, 2.2945], 13);

    // Add an OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a marker with a popup in the location of the Eiffel Tower
    var marker = L.marker([48.8584, 2.2945]).addTo(map);
    marker.bindPopup('<b>Eiffel Tower</b><br>One of the most famous landmarks in the world.').openPopup();

    // Create a circle around an area (let’s say Trocadéro, near the Eiffel Tower)
    var circle = L.circle([48.8629, 2.2876], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    circle.bindPopup("Trocadéro Gardens.");
});

function loadData(uuid) {
    const contentDiv = document.getElementById('content');
    const baseURL = 'https://ochre.lib.uchicago.edu/ochre?uuid=';

    fetch(`${baseURL}${uuid}`)
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            const title = data.getElementsByTagName('title')[0]?.textContent;
            let html = `<h1>${title}</h1>`;

            const properties = data.getElementsByTagName('properties')[0];
            if (properties) {
                for (let i = 0; i < properties.children.length; i++) {
                    html += `<p>${properties.children[i].tagName}: ${properties.children[i].textContent}</p>`;
                }
            }

            const previewImage = data.getElementsByTagName('previewImage')[0];
            if (previewImage) {
                const imgSrc = previewImage.textContent;
                html += `<img src="${imgSrc}" alt="Preview Image" class="img-fluid my-3">`;
            }

            contentDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            contentDiv.innerHTML = '<p>Error loading data.</p>';
        });
}
