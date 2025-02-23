document.getElementById("supportForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const question = document.getElementById("question").value;

    fetch("/send-question?name=" + encodeURIComponent(name) + "&question=" + encodeURIComponent(question))
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error("Error:", error));
});
