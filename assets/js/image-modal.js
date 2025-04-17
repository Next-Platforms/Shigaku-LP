function initializeImageModal() {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.getElementById("close-modal");
  const targetImage = document.querySelector(".figure-modal-trigger");

  // Check if all required elements exist
  if (!modal || !modalImg || !closeBtn || !targetImage) {
    console.warn("Some modal elements are missing, retrying in 100ms...");
    setTimeout(initializeImageModal, 100);
    return;
  }

  // Only initialize on screens <= 900px
  function initializeModal() {
    if (window.innerWidth <= 900) {
      targetImage.style.cursor = "pointer";
      targetImage.addEventListener("click", openModal);
    } else {
      targetImage.style.cursor = "default";
      targetImage.removeEventListener("click", openModal);
    }
  }

  function openModal() {
    modal.classList.remove("hidden");
    modalImg.src = this.src;
    document.body.style.overflow = "hidden"; // Prevent body scroll
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Restore body scroll
  }

  // Close modal when clicking close button
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Initialize modal on load and resize
  initializeModal();
  window.addEventListener("resize", initializeModal);
}

// Start initialization when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeImageModal);
} else {
  initializeImageModal();
}
