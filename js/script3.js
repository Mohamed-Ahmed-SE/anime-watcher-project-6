 // Get genre from URL parameter
 // Get genre from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const selectedGenre = urlParams.get('genre');

if (!selectedGenre) {
    window.location.href = 'index.html'; // Redirect if no genre specified
}

// Set page title
document.getElementById('genreTitle').textContent = `${selectedGenre} Anime`;

// Get anime data from localStorage with validation
let animeData;
try {
    const storedData = localStorage.getItem('animeDatabase');
    if (!storedData) throw new Error('No data found');
    
    const parsedData = JSON.parse(storedData);
    animeData = parsedData.data || parsedData; // Handle both formats
} catch (error) {
    console.error('Error loading data:', error);
    window.location.href = 'index.html';
    throw error;
}

// Improved filtering function
function filterAnimeByGenre(animeList, targetGenre) {
    const normalizedTarget = targetGenre.toLowerCase().trim();
    return animeList.filter(anime => {
        const genres = anime.genres.toLowerCase().split(/,\s*/);
        return genres.includes(normalizedTarget);
    });
}

// Filter anime with fallback
const filteredAnime = filterAnimeByGenre(animeData, selectedGenre) || [];

// Handle empty results
const animeGrid = document.getElementById('animeGrid');
if (filteredAnime.length === 0) {
    animeGrid.innerHTML = `
        <div class="no-results">
            <h2>No ${selectedGenre} anime found</h2>
            <p>Try another category or check back later!</p>
        </div>
    `;
    throw new Error('No anime found for this genre');
}

// Card generation with error handling
filteredAnime.forEach(anime => {
    try {
        const card = document.createElement('div');
        card.className = 'anime-card';
        
        // Safely generate HTML
        card.innerHTML = `
             <div class="anime-card">
            <div class="card-image-container">
                <img src="${anime.sposter || 'images/placeholder.jpg'}" 
                     class="card-image" 
                     alt="${anime.name}"
                     onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="card-body">
                <h3 class="anime-title">${anime.name}</h3>
                <div class="card-meta">
                    <div class="rating">
                        <span>★ ${anime.land || 'N/A'}</span>
                    </div>
                    <div class="genres">
                        ${(anime.genres?.split(', ') || ['General'])
                            .slice(0, 2)
                            .map(genre => `<span class="genre-tag">${genre}</span>`)
                            .join('')}
                    </div>
                </div>
                <button class="watch-button" 
                        onclick="location.href='watch.html?id=${anime.id || ''}'">
                    <i style="margin-right: 5px;"class="bi bi-play-fill"></i>WATCH
                </button>
            </div>
        </div>
        `;

        animeGrid.appendChild(card);
    } catch (error) {
        console.error('Error creating anime card:', error);
    }
});

document.querySelectorAll('.watch-button').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.anime-card');
        const animeName = card.querySelector('.anime-title').textContent;
        const animeData = JSON.parse(localStorage.getItem('animeDatabase'))
            .find(anime => anime.name === animeName);
        
        localStorage.setItem('selectedAnime', JSON.stringify(animeData));
        window.location.href = 'index2.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get anime data from localStorage
    const animeData = JSON.parse(localStorage.getItem('animeDatabase')) || [];

    // DOM Elements
    const searchInput = document.getElementById('search_input');
    const searchContainer = document.querySelector('.search');

    // Initialize Search
    function initializeSearch() {
        if (!searchInput || !searchContainer) return; // Ensure elements exist

        // Clear previous results
        searchContainer.innerHTML = '';

        // Create search cards
        animeData.forEach(anime => {
            const card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${anime.sposter || 'images/placeholder.jpg'}" 
                     alt="${anime.name} poster">
                <div class="cont">
                    <h3>${anime.name}</h3>
                    <p>${anime.genres}, ${anime.date}, 
                        <span>IMDB</span><i class="bi bi-star-fill"></i>${anime.land}
                    </p>
                </div>
            `;

            card.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('selectedAnime', JSON.stringify(anime));
                window.location.href = `index2.html?anime=${encodeURIComponent(anime.name)}`;
            });

            searchContainer.appendChild(card);
        });

        // Search input handler
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const hasSearchTerm = searchTerm.length > 0;

            // Toggle visibility of search results
            searchContainer.classList.toggle('visible', hasSearchTerm);

            // Filter and display matching cards
            const cards = searchContainer.querySelectorAll('.card');
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = title.includes(searchTerm) ? 'flex' : 'none';
            });
        });

        // Handle focus
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.length > 0) {
                searchContainer.classList.add('visible');
            }
        });

        // Handle click outside to close search results
        document.addEventListener('click', (e) => {
            if (!searchContainer.contains(e.target)) {
                searchContainer.classList.remove('visible');
            }
        });
    }

    // Initialize the search functionality
    initializeSearch();
});