document.addEventListener("DOMContentLoaded", function () {
  const confirmationForm = document.getElementById("confirmation-form");
  const submitButton = confirmationForm.querySelector("button[type='submit']");
  const goBackButton = document.getElementById("go-back-button");

  const savedData = JSON.parse(localStorage.getItem("contactFormDataShigaku"));

  if (savedData) {
    document.getElementById("お名前").textContent = savedData.お名前 || "";
    document.getElementById("ふりがな").textContent = savedData.ふりがな || "";
    document.getElementById("会社名").textContent = savedData.会社名 || "";
    document.getElementById("電話番号").textContent = savedData.電話番号 || "";
    document.getElementById("メールアドレス").textContent =
      savedData.メールアドレス || "";
    document.getElementById("希望金額").textContent = savedData.希望金額 || "";
    document.getElementById("買取希望日(入金日)").textContent =
      savedData["買取希望日(入金日)"] || "";
    document.getElementById("お問い合わせ内容").textContent =
      savedData["お問い合わせ内容"] || "";
  } else {
    alert("確認するためのデータがありません。");
    window.location.href = "index.html";
  }

  function sendEmail(data) {
    submitButton.disabled = true;
    goBackButton.disabled = true;
    fetch("https://simple-proxy-taupe.vercel.app/api/shigaku", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("contactFormDataShigaku");
          window.location.href = "success.html";
        } else {
          console.log("Error Response -->", response);
          alert("メール送信中にエラーが発生しました。");
        }
      })
      .catch((error) => {
        console.log("Error -->", error);
        alert("メール送信中にエラーが発生しました。");
      })
      .finally(() => {
        submitButton.disabled = false;
        goBackButton.disabled = false;
      });
  }

  if (confirmationForm) {
    confirmationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendEmail(savedData);
    });
  }
});
