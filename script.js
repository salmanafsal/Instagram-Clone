const feed = document.getElementById('feed');

function loadFeedItems() {
    for (let i = 0; i < 5; i++) {
        const feedItem = document.createElement('div');
        feedItem.className = 'feed-item';
        
        // Sample content - replace with actual data
        feedItem.innerHTML = `
            <img src="https://picsum.photos/400/500" alt="Image">
            <div class="username">User${Math.floor(Math.random() * 100)}</div>
            <div class="caption">This is a sample caption for the image.</div>
        `;
        
        feed.appendChild(feedItem);
    }
}

// Load initial feed items
loadFeedItems();

// Infinite scroll
feed.addEventListener('scroll', () => {
    if (feed.scrollTop + feed.clientHeight >= feed.scrollHeight) {
        loadFeedItems(); // Load more items when scrolling to the bottom
    }
});


