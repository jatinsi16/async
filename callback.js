// Event listener to handle button clicks
document.getElementById('callbackBtn').addEventListener('click', () => {
    const resultDiv = document.getElementById('callbackResult'); // Select the div for results
    resultDiv.textContent = "Processing... Please wait."; // Initial status message

    // Simulate a delay and execute a callback
    function simulateAsyncTask(callback) {
        setTimeout(() => {
            callback(); // Callback execution after 5 seconds
        }, 5000);
    }

    // Execute the function with a callback to update the result
    simulateAsyncTask(() => {
        resultDiv.textContent = "Callback executed successfully after 5 seconds!";
    });
});
