
// Simulate search functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';

  if (query.length >= 3) {
    // Simulate search results by adding sample content
    const numResults = Math.min(6, Math.floor(Math.random() * 10));
    for (let i = 0; i < numResults; i++) {
      const resultItem = document.createElement('div');
      resultItem.classList.add('carousel-item', 'search-result');
      resultItem.innerHTML = `
        <img src="search${i + 1}.jpg" alt="Search Result ${i + 1}">
        <h3>Search Result ${i + 1}</h3>
      `;
      searchResults.appendChild(resultItem);
    }
  }
});

