function initScrollToTop() {
  const scrollButton = document.getElementById("scroll-to-top");

  if (!scrollButton) return;

  // Show button when user scrolls down 300px
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add("visible");
    } else {
      scrollButton.classList.remove("visible");
    }
  });

  // Scroll to top when button is clicked
  scrollButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Initial check for scroll position
  if (window.pageYOffset > 300) {
    scrollButton.classList.add("visible");
  }
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollToTop);
} else {
  initScrollToTop();
}
