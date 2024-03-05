// Function to handle search action
function search() {
    // Get the search input value
    var searchTerm = document.getElementById("search-input").value.toLowerCase();

    // Get all movie names
    var movieNames = document.querySelectorAll(".movie-name");

    // Flag to check if any search result is found
    var searchFound = false;

    // Loop through all movie names
    movieNames.forEach(function (movieName) {
        // Get the text content of the movie name
        var name = movieName.textContent.toLowerCase();

        // Check if the search term is present in the movie name
        if (name.includes(searchTerm)) {
            // Show the movie box if the search term matches
            movieName.parentNode.parentNode.style.display = "block";
            searchFound = true; // Set search found flag to true
        } else {
            // Hide the movie box if the search term does not match
            movieName.parentNode.parentNode.style.display = "none";
        }
    });

    // Get the headings for movie lists
    var headings = document.querySelectorAll("main h3");

    // Loop through all headings
    headings.forEach(function (heading) {
        // Check if there is a search term
        if (searchTerm) {
            // Hide the heading if there is a search term
            heading.style.opacity = "0";
            heading.style.pointerEvents = "none"; // Disable pointer events to prevent interaction
        } else {
            // Show the heading if there is no search term
            heading.style.opacity = "1";
            heading.style.pointerEvents = "auto"; // Enable pointer events
        }
    });

    // Display search result message
    var searchResultText = document.getElementById("search-result-text");
    if (searchTerm && searchFound) {
        searchResultText.textContent = "Your search results:";
    } else if (searchTerm && !searchFound) {
        searchResultText.textContent = "No results found for your search.";
    } else {
        searchResultText.textContent = ""; // Clear the text if there is no search term
    }
}

function toggleSearch() {
    var searchBar = document.getElementById("search-input");
    if (searchBar.style.display === "none") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
        search(); // Trigger search when hiding the search bar to show all movies
    }
}



document.addEventListener("DOMContentLoaded", function() {
    // Get gallery elements
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Set initial image index and total images
    let currentIndex = 0;
    const totalImages = galleryItems.length;

    // Function to show next image
    function showNextImage() {
        // Hide current image
        galleryItems[currentIndex].style.display = 'none';

        // Calculate index of next image
        currentIndex = (currentIndex + 1) % totalImages;

        // Show next image
        galleryItems[currentIndex].style.display = 'block';
    }

    // Initially show the first image
    galleryItems[currentIndex].style.display = 'block';

    // Set interval to switch images every 10 seconds
    const interval = setInterval(showNextImage, 8000); // 10 seconds in milliseconds

    // Clear interval when the page is unloaded (optional)
    window.addEventListener('beforeunload', function() {
        clearInterval(interval);
    });
});



// Add event listener for keyup event to trigger search function
document.getElementById("search-input").addEventListener("keyup", search);




