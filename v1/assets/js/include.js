// Dynamically load header and footer into the page
function includeHTML(selector, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function() {
  includeHTML("#site-header", "assets/header.html");
  includeHTML("#site-footer", "assets/footer.html");
});
