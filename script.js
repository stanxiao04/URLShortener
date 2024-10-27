const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');
const copyBtn = document.getElementById('copy-btn');

shortBtn.addEventListener('click', shorternUrl);

function shorternUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

    shorternedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl).then(response => response.text()).then(data => {
        shorternedUrlTextarea.value = data;
    }).catch(error => {
        shorternedUrlTextarea.value = "Error : Unable to shorten URL!";
    });

}

reloadBtn.addEventListener('click', () => {
    location.reload();
});

copyBtn.addEventListener('click', () => {
    var copyText = document.getElementById("shortenedUrl");
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard: " + copyText.value);
});