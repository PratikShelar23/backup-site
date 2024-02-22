function loadPage(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("box3").innerHTML = this.responseText;
            loadCSS("studash.css"); // Load CSS file
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function loadCSS(url) {
    var link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

