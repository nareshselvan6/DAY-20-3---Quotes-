// Function to fetch a random Kanye West quote from the API
function getRandomquote() {
    // Send a GET request to the Kanye West quote API
    fetch('https://api.kanye.rest/')
      // Once the response is received, parse it as JSON
      .then(response => response.json())
      // Once the JSON data is extracted, process it
      .then(data => {
        // Call the function to display the quote
        getquotes(data.quote)
        // Uncomment the line below to log the full data received
        // console.log(data);
      })
      // If there's an error during the fetch operation, log the error
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
}

// Function to display the quote on the webpage
function getquotes(quotes) {
    // Find the container element for the quote
    const quoteContainer = document.getElementById('quote');
    // Set the inner HTML of the container to display the quote
    quoteContainer.innerHTML = `<p>${quotes}</p>`;
    // Uncomment the line below to log the quote
    // console.log(quotes);
}
