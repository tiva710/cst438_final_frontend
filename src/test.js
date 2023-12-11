document.getElementById('fetchData').addEventListener('click', () => {
    fetchDataFromServer();
});

function fetchDataFromServer() {
    fetch('/api/your-endpoint') // Replace with your specific backend endpoint
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            displayError(error);
        });
}

function displayData(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayError(error) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
}
