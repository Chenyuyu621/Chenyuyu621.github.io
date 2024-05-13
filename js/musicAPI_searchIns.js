// Handle the API requests
function searchArtist() {
    const artist = document.getElementById('artistName').value;
    const baseUrl = `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(artist)}&fmt=json`;

    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log to see what data is returned
            if (data && data.artists) {
                displayResults(data.artists);
            } else {
                console.error('No artists found or incorrect data structure:', data);
            }
        })
        .catch(error => console.error('Error:', error));
}



function displayResults(artists) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; 

    artists.forEach(artist => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = artist.name;
        link.onclick = function() {
            searchAlbums(artist.id);
            return false; // This should be inside the function body
        };
        resultsContainer.appendChild(link);
        resultsContainer.appendChild(document.createElement('br'));
    });
}

// Search for albums when an artist's name is clicked:
function searchAlbums(artistId) {
    const baseUrl = `https://musicbrainz.org/ws/2/artist/?query=arid:${artistId}&fmt=json`;

    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            if (data['release-groups']) {
                displayAlbums(data['release-groups']);
            } else {
                console.error('No albums found or incorrect data structure:', data);
            }
        })
        .catch(error => console.error('Error fetching albums:', error));
}

function displayAlbums(albums) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<table></table>'; // Create the table container
    const table = resultsContainer.querySelector('table');
    table.innerHTML = '<tr><th>Release Date</th><th>Album Name</th></tr>'; // Add headers

    albums.forEach(album => {
        const row = table.insertRow(-1); // Insert into the existing table
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = album['first-release-date'] || 'Unknown'; // Handle missing dates
        cell2.textContent = album.title;
    });
}
