// Add click event to the button
document.getElementById('promiseBtn').addEventListener('click', () => {
    const resultDiv = document.getElementById('promiseResult'); // Div to display results
    resultDiv.textContent = "Loading posts..."; // Message during processing

    // Create a Promise to fetch data
    const fetchPosts = new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => reject("Request timed out"), 5000); // Reject if it exceeds 5 seconds

        // Fetch posts from the API
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeoutId); // Clear timeout if data is fetched
                resolve(data.posts); // Resolve with post data
            })
            .catch(() => reject("Failed to fetch data")); // Handle fetch errors
    });

    // Handle the promise
    fetchPosts
        .then(posts => {
            // Display fetched data in the div
            resultDiv.innerHTML = posts.map(post => `<p>${post.title}</p>`).join('');
        })
        .catch(error => {
            // Show an error message if promise is rejected
            resultDiv.textContent = error;
        });
});
