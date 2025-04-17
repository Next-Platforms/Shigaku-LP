// Function to initialize header scroll behavior
function initializeHeaderScroll() {
  const headerButtons = document.getElementById("headerButtons");
  if (!headerButtons) return; // Exit if element not found

  const scrollThreshold = 200;
  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      headerButtons.classList.add(
        "fixed",
        "left-0",
        "top-0",
        "right-0",
        "bg-[#FFFAD7]",
        "1100:bg-transparent",
        "z-50",
        "border-b-[1px]",
        "1100:border-b-0"
      );
    } else {
      headerButtons.classList.remove(
        "fixed",
        "left-0",
        "top-0",
        "right-0",
        "bg-[#FFFAD7]",
        "1100:bg-transparent",
        "z-50",
        "border-b-[1px]",
        "1100:border-b-0"
      );
    }
  });
}

// Create a MutationObserver to watch for changes in the header container
const headerObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      // Check if our headerButtons element exists after content is added
      if (document.getElementById("headerButtons")) {
        initializeHeaderScroll();
        headerObserver.disconnect(); // Stop observing once initialized
      }
    }
  });
});

// Start observing the header container for changes
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerObserver.observe(headerContainer, {
      childList: true,
      subtree: true,
    });
  }
});
