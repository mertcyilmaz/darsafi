// modal.js
// Simple modal popup logic for announcements and newsletter signups

(function() {
  // Create modal structure
  function createModal(id, contentHtml) {
    // Remove existing modal with same id
    var existing = document.getElementById(id);
    if (existing) existing.remove();

    var modal = document.createElement('div');
    modal.id = id;
    modal.className = 'custom-modal';
    modal.innerHTML = `
      <div class="custom-modal-overlay"></div>
      <div class="custom-modal-content">
        <span class="custom-modal-close" tabindex="0">&times;</span>
        <div class="custom-modal-body">${contentHtml}</div>
      </div>
    `;
    document.body.appendChild(modal);

    // Close logic
    modal.querySelector('.custom-modal-close').onclick = close;
    modal.querySelector('.custom-modal-overlay').onclick = close;
    function close() {
      modal.remove();
    }
    // ESC key closes modal
    document.addEventListener('keydown', function escListener(e) {
      if (e.key === 'Escape') {
        close();
        document.removeEventListener('keydown', escListener);
      }
    });
  }

  // Expose to global
  window.showAnnouncementModal = function(messageHtml) {
    createModal('announcement-modal', messageHtml);
  };
  window.showNewsletterModal = function(formHtml) {
    createModal('newsletter-modal', formHtml);
  };
})();

// Example usage (uncomment to test):
// showAnnouncementModal('<h2>Announcement</h2><p>This is an important update!</p>');
// showNewsletterModal('<h2>Subscribe</h2><form><input type="email" placeholder="Your email"><button type="submit">Sign Up</button></form>');

// Add minimal CSS for modal (should be moved to CSS file in production)
(function() {
  var style = document.createElement('style');
  style.innerHTML = `
    .custom-modal { position: fixed; z-index: 9999; left: 0; top: 0; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; }
    .custom-modal-overlay { position: absolute; left: 0; top: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); }
    .custom-modal-content { position: relative; background: #fff; padding: 2em; border-radius: 8px; max-width: 90vw; max-height: 90vh; overflow: auto; box-shadow: 0 2px 16px rgba(0,0,0,0.2); z-index: 1; }
    .custom-modal-close { position: absolute; right: 1em; top: 1em; font-size: 2em; color: #888; cursor: pointer; }
    .custom-modal-close:focus { outline: 2px solid #0078d7; }
  `;
  document.head.appendChild(style);
})();
