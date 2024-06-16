// script.js

// Dummy data for counselors
const counselors = [
    { id: 1, name: 'Dr. Smith', specialty: 'anxiety', rating: 4.8, experience: 15, bio: 'Dr. Smith specializes in anxiety disorders and has over 15 years of experience.' },
    { id: 2, name: 'Dr. Johnson', specialty: 'depression', rating: 4.6, experience: 10, bio: 'Dr. Johnson is an expert in treating depression with a decade of experience.' },
    { id: 3, name: 'Dr. Williams', specialty: 'relationship', rating: 4.9, experience: 20, bio: 'Dr. Williams has a focus on relationship counseling with 20 years in the field.' },
    { id: 4, name: 'Dr. Brown', specialty: 'anxiety', rating: 4.4, experience: 7, bio: 'Dr. Brown is dedicated to helping patients manage anxiety, with 7 years of practice.' },
    { id: 5, name: 'Dr. Garcia', specialty: 'depression', rating: 4.7, experience: 12, bio: 'Dr. Garcia offers expertise in depression treatment, with 12 years of experience.' },
    { id: 6, name: 'Dr. Martinez', specialty: 'relationship', rating: 4.5, experience: 8, bio: 'Dr. Martinez provides counseling for relationship issues, with 8 years of experience.' }
];

// State to keep track of displayed recommendations and load more feature
let displayedCounselors = [];
let displayCount = 3; // Number of recommendations to display initially and increment

// Function to initialize the recommendations
function initRecommendations() {
    displayedCounselors = counselors.slice(0, displayCount);
    displayRecommendations(displayedCounselors);
}

// Function to display recommendations
function displayRecommendations(list) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    list.forEach((counselor, index) => {
        const card = document.createElement('div');
        card.classList.add('recommendation-card');
        card.setAttribute('data-index', index);
        card.innerHTML = `
            <h2>${counselor.name}</h2>
            <p>Specialty: ${counselor.specialty}</p>
            <p>Rating: ${counselor.rating}</p>
            <p>Experience: ${counselor.experience} years</p>
            <button class="details-btn">Details</button>
            <button class="favorite-btn" data-id="${counselor.id}">Favorite</button>
        `;
        card.querySelector('.details-btn').addEventListener('click', () => showDetailsModal(counselor));
        card.querySelector('.favorite-btn').addEventListener('click', () => toggleFavorite(counselor.id));
        recommendationsDiv.appendChild(card);
    });

    // Show or hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (list.length < counselors.length) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

// Function to load more recommendations
function loadMoreRecommendations() {
    const nextCounselors = counselors.slice(displayedCounselors.length, displayedCounselors.length + displayCount);
    displayedCounselors = displayedCounselors.concat(nextCounselors);
    displayRecommendations(displayedCounselors);
}

// Function to filter recommendations by specialty
function filterRecommendations() {
    const filter = document.getElementById('filter').value.toLowerCase();
    if (filter === 'all') {
        displayedCounselors = counselors.slice(0, displayCount);
    } else {
        displayedCounselors = counselors.filter(counselor => counselor.specialty.toLowerCase().includes(filter)).slice(0, displayCount);
    }
    displayRecommendations(displayedCounselors);
}

// Function to sort recommendations
function sortRecommendations() {
    const sortCriteria = document.getElementById('sort').value;
    const sorted = [...displayedCounselors]; // Copy the array to avoid modifying the original

    switch (sortCriteria) {
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'experience':
            sorted.sort((a, b) => b.experience - a.experience);
            break;
    }

    displayRecommendations(sorted);
}

// Function to show detailed modal
function showDetailsModal(counselor) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('#modal .modal-content');
    modalContent.innerHTML = `
        <h2>${counselor.name}</h2>
        <p>Specialty: ${counselor.specialty}</p>
        <p>Rating: ${counselor.rating}</p>
        <p>Experience: ${counselor.experience} years</p>
        <p>${counselor.bio}</p>
        <button onclick="closeModal()">Close</button>
    `;
    modal.style.display = 'flex';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to toggle favorite status
function toggleFavorite(counselorId) {
    const counselorIndex = counselors.findIndex(counselor => counselor.id === counselorId);
    if (counselorIndex !== -1) {
        counselors[counselorIndex].favorite = !counselors[counselorIndex].favorite;
        // You can implement additional UI changes here (e.g., change button color)
        // Optionally, save favorite status to localStorage for persistence
    }
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    if (searchInput.trim() === '') {
        displayedCounselors = counselors.slice(0, displayCount);
    } else {
        displayedCounselors = counselors.filter(counselor =>
            counselor.name.toLowerCase().includes(searchInput) ||
            counselor.specialty.toLowerCase().includes(searchInput)
        ).slice(0, displayCount);
    }
    displayRecommendations(displayedCounselors);
}

// Initialize the interface on page load
document.addEventListener('DOMContentLoaded', () => {
    initRecommendations();

    // Add event listeners
    document.getElementById('loadMoreBtn').addEventListener('click', loadMoreRecommendations);
    document.getElementById('searchBtn').addEventListener('click', handleSearch);
    document.getElementById('filter').addEventListener('change', filterRecommendations);
    document.getElementById('sort').addEventListener('change', sortRecommendations);
});

// Hide modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
