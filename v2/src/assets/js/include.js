// Dynamically load header, footer, and toggle content into the page
function includeHTML(selector, url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const mountPoint = document.querySelector(selector);
      if (!mountPoint) return;

      mountPoint.innerHTML = data;

      mountPoint.querySelectorAll('script').forEach(originalScript => {
        const script = document.createElement('script');
        if (originalScript.src) {
          script.src = originalScript.src;
        } else {
          script.textContent = originalScript.textContent;
        }
        document.body.appendChild(script);
        originalScript.remove();
      });

      if (typeof callback === 'function') {
        callback();
      }
    });
}

document.addEventListener("DOMContentLoaded", function() {
  includeHTML("#site-header", "assets/header.html");
  includeHTML("#site-footer", "assets/footer.html");

  const toggleDiv = document.createElement("div");
  toggleDiv.id = "site-toggle";
  document.body.prepend(toggleDiv);
  includeHTML("#site-toggle", "assets/toggle.html");
});
