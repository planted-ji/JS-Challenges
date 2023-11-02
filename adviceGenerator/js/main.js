const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-num");
const adviceButton = document.getElementById("advice-button");

const apiUrl = "https://api.adviceslip.com/advice";

function rendomAdvice() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      const adviceNum = data.slip.id;
      adviceId.textContent = `ADVICE #${adviceNum}`;
      adviceText.textContent = `“${advice}”`;
    })
    .catch((error) => {
      adviceText.textContent =
        "명언 가져오기를 실패했습니다. 다시 시도해주세요.";
      console.error("명언 로드 실패.", error);
    });
}

adviceButton.addEventListener("click", rendomAdvice);

rendomAdvice();
