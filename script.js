

function getRandomquote() {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => {
        getquotes(data.quote)
        // console.log(data);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
  }
  
  function getquotes(quotes) {
    const quoteContainer = document.getElementById('quote');
    // console.log(quotes);
    quoteContainer.innerHTML = `<p>${quotes}</p>`;
  }