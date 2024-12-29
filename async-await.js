// Event listener for button clicks
document.getElementById('asyncAwaitBtn').addEventListener('click', async () => {
    const resultDiv = document.getElementById('asyncAwaitResult'); // Target div for displaying results
    resultDiv.textContent = "Fetching posts..."; // Inform user about data fetching

    try {
        // Set up a timeout controller for fetch requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Abort after 5 seconds

        // Await response from the API
        const response = await fetch('https://dummyjson.com/posts', { signal: controller.signal });
        clearTimeout(timeoutId); // Clear timeout if successful

        if (!response.ok) throw new Error("Network response was not ok"); // Handle HTTP errors

        const data = await response.json(); // Parse JSON data
        resultDiv.innerHTML = data.posts.map(post => `<p>${post.title}</p>`).join(''); // Display titles
    } catch (error) {
        // Catch timeout or fetch errors
        resultDiv.textContent = error.name === "AbortError" ? "Request timed out." : "Error occurred while fetching data.";
    }
});
