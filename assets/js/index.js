document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const contactForm = document.getElementById("contact-form");

  // Retrieve the stored data from localStorage
  const savedData = JSON.parse(localStorage.getItem("contactFormDataShigaku"));

  // Function to load saved data from localStorage and prefill the form
  function loadFormData() {
    if (savedData) {
      // Prefill each form field with the saved data
      contactForm["お名前"].value = savedData.お名前 || "";
      contactForm["ふりがな"].value = savedData.ふりがな || "";
      contactForm["会社名"].value = savedData.会社名 || "";
      contactForm["電話番号"].value = savedData.電話番号 || "";
      contactForm["メールアドレス"].value = savedData.メールアドレス || "";
      contactForm["希望金額"].value = savedData.希望金額 || "";
      contactForm["買取希望日(入金日)"].value =
        savedData["買取希望日(入金日)"] || "";
      contactForm["お問い合わせ内容"].value =
        savedData["お問い合わせ内容"] || "";
    }
  }

  // Function to save form data to localStorage
  function saveFormData() {
    const formData = {
      お名前: contactForm["お名前"].value,
      ふりがな: contactForm["ふりがな"].value,
      会社名: contactForm["会社名"].value,
      電話番号: contactForm["電話番号"].value,
      メールアドレス: contactForm["メールアドレス"].value,
      希望金額: contactForm["希望金額"].value,
      "買取希望日(入金日)": contactForm["買取希望日(入金日)"].value,
      お問い合わせ内容: contactForm["お問い合わせ内容"].value,
    };

    // Save the form data in localStorage
    localStorage.setItem("contactFormDataShigaku", JSON.stringify(formData));

    // Redirect to confirmation page
    window.location.href = "confirm.html";
  }

  // Load saved form data on page load
  loadFormData();

  // Handle form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
    saveFormData(); // Save form data to localStorage
  });
});
