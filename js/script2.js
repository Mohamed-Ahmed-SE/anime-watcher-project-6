document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const animeName = urlParams.get("anime");
    const search = document.querySelector('.search');
    const search_input = document.querySelector('#search_input');
    const selectedAnime = JSON.parse(localStorage.getItem('selectedAnime'));
    const animeDatabase = JSON.parse(localStorage.getItem('animeDatabase')) || []; // ADD THIS LINE



    if (!selectedAnime) {
        console.error("No anime selected");
        window.location.href = 'index1.html';
        return;
    }
    if (!selectedAnime) {
        window.location.href = 'index3.html';
        return;
    }

    function updateAnimeDetails(anime) {
        document.getElementById("animeTitle").textContent = anime.name;

        const posterElement = document.getElementById("animeImage");
        console.log("Poster URL:", anime.nigga); // Verify URL in console

        if (anime.nigga) {
            posterElement.src = anime.nigga;
            posterElement.alt = `${anime.name} poster`;
            posterElement.style.display = "block";
        } else {
            console.warn("No poster URL provided.");
            posterElement.style.display = "none";
        }
        const trailerContainer = document.getElementById('trailerContainer');
        const trailerIframe = document.getElementById('animeTrailer');
      
        if (anime.trailer) {
          const videoId = extractYouTubeId(anime.trailer);
          if (videoId) {
            trailerIframe.src = `https://www.youtube.com/embed/${videoId}`;
            trailerContainer.style.display = 'block';
          } else {
            trailerContainer.style.display = 'none';
          }
        } else {
          trailerContainer.style.display = 'none';
        }

    
        // Add this new code for the Watch Now button
        const watchButton = document.querySelector('.watch-button');
        if (watchButton && selectedAnime.watch) {
            watchButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = selectedAnime.watch;
            });
        } else if (watchButton) {
            console.warn("No watch link available for this anime");
            watchButton.addEventListener('click', function(e) {
                e.preventDefault();
                alert("Watch link not available for this anime");
            });
        }
      
      
      function extractYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
      }


        // Use CORRECT rating property: anime.land (not anime.rating)
        const rating = Math.floor(anime.land) || 0; // Fix: Changed from anime.rating to anime.land

        // Update stars based on rating
        const starsContainer = document.querySelector(".rating-stars");
        starsContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            star.className = `bi bi-star${i < rating ? '-fill' : ''}`;
            starsContainer.appendChild(star);
        }

        // Update rating text
        document.querySelector(".rating-text").textContent = `Average Rating: ${anime.land}/10`; // Fix: Use anime.land

        // Remove unnecessary synopsis/poster visibility toggle
        const synopsisElement = document.getElementById("animeDescription");
        synopsisElement.textContent = anime.synopsis || "Synopsis not available";

        // Update other details
        document.getElementById("audio").textContent = anime.audio || "English";
        document.getElementById("subtitles").textContent = anime.subtitles || "English, Deutsch, Español";
        document.getElementById("contentAdvisory").textContent = anime.contentAdvisory || "Profanity, Violence";
        document.getElementById("genres").textContent = anime.genres || "Action, Comedy, Fantasy";
        document.getElementById("meta-text").textContent = anime.genres || "Action, Comedy, Fantasy";
    }

    function updateRecommendedAnime() {
        const recommendedContainer = document.getElementById("upcoming-anime-cards");
        if (!recommendedContainer) return;

        // Clear previous content
        recommendedContainer.innerHTML = "";

        // Get selected anime's genres
        const selectedGenres = selectedAnime.genres ? selectedAnime.genres.split(", ") : [];

        // Filter anime with at least 2 matching genres
        const recommendations = animeDatabase.filter(anime => {
            if (anime.name === selectedAnime.name) return false; // Exclude current anime

            const animeGenres = anime.genres?.split(", ") || [];
            const commonGenres = animeGenres.filter(genre => selectedGenres.includes(genre));
            return commonGenres.length >= 2; // Require at least 2 shared genres
        }).slice(0, 30); // Get top 5 matches

        // Create recommendation cards
        recommendations.forEach(anime => {
            const card = document.createElement('div');
            card.classList.add('recommendation-card');
            card.innerHTML = `
                 <div class="upcoming-card">
            <div class="poster-container">
                <img src="${anime.sposter}">
                <div class="image-overlay"></div>
                <div class="details-container">
                    <h3 class="title">${anime.name}</h3>
                    <div class="genre-list">
                        ${anime.genres.split(", ").map(genre => `<span>${genre}</span>`).join('')}
                    </div>
                    <div class="rating-section">
                        <div class="rating-badge">
                            <i class="fas fa-star"></i>
                            <span class="score">${anime.land}</span>
                        </div>
                    </div>
                    <p class="synopsis">${anime.synopsis}</p>
                </div>
            </div>
            <div class="title-container">
                <h3 class="title">${anime.name}</h3>
                <div class="subtitle">Subtitled</div>
            </div>
        </div>
    `;

            // Add click event to navigate to anime details
            card.addEventListener('click', () => {
                localStorage.setItem('selectedAnime', JSON.stringify(anime));
                window.location.href = `index2.html?anime=${encodeURIComponent(anime.name)}`;
            });

            recommendedContainer.appendChild(card);
        });

        // Add slider navigation functionality
        const leftButton = document.querySelector('.left-button');
        const rightButton = document.querySelector('.right-button');

        leftButton.addEventListener('click', () => {
            recommendedContainer.scrollBy({
                left: -recommendedContainer.offsetWidth, // Scroll by one container width
                behavior: 'smooth'
            });
        });

        rightButton.addEventListener('click', () => {
            recommendedContainer.scrollBy({
                left: recommendedContainer.offsetWidth, // Scroll by one container width
                behavior: 'smooth'
            });
        });

        // Disable buttons when at the start or end
        recommendedContainer.addEventListener('scroll', () => {
            const scrollLeft = recommendedContainer.scrollLeft;
            const maxScroll = recommendedContainer.scrollWidth - recommendedContainer.clientWidth;

            if (scrollLeft <= 0) {
                leftButton.classList.add('disabled');
            } else {
                leftButton.classList.remove('disabled');
            }

            if (scrollLeft >= maxScroll) {
                rightButton.classList.add('disabled');
            } else {
                rightButton.classList.remove('disabled');
            }
        });

        // Initial button state
        recommendedContainer.dispatchEvent(new Event('scroll'));
    }

    // Call the function to update recommendations

    updateAnimeDetails(selectedAnime);
    updateRecommendedAnime();

    if (search) {
        // Get from correct storage key
        const animeDatabase = JSON.parse(localStorage.getItem('animeDatabase')) || [];

        // Clear previous results
        search.innerHTML = '';

        // Create search cards
        animeDatabase.forEach(element => {
            const card = document.createElement('a');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${element.sposter || 'images/placeholder.jpg'}" 
                     alt="${element.name} poster">
                <div class="cont">
                    <h3>${element.name}</h3>
                    <p>${element.genres}, ${element.date}, 
                        <span>IMDB</span><i class="bi bi-star-fill"></i>${element.land}
                    </p>
                </div>
            `;

            card.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('selectedAnime', JSON.stringify(element));
                window.location.href = `index2.html?anime=${encodeURIComponent(element.name)}`;
            });

            search.appendChild(card);
        });

        // Input handler
        search_input.addEventListener('input', () => {
            const searchTerm = search_input.value.trim().toLowerCase();
            const hasSearchTerm = searchTerm.length > 0;

            search.classList.toggle('visible', hasSearchTerm);

            Array.from(search.querySelectorAll('.card')).forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = title.includes(searchTerm) ? 'flex' : 'none';
            });
        });

        // Handle focus
        search_input.addEventListener('focus', () => {
            if (search_input.value.length > 0) {
                search.classList.add('visible');
            }
        });
    }
}); 