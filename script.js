const form = document.getElementById("travel-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("제출됨");

  const location = document.getElementById("location").value;
  const startDate = document.getElementById("startDate").value;  
  const endDate = document.getElementById("endDate").value;      

  resultDiv.textContent = "추천 정보를 불러오는 중입니다...";

  try {
    const response = await fetch("https://assign2-brown.vercel.app/api/duksungAI",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location, startDate, endDate }),
    });

    const data = await response.json();

    if (response.ok) {
      resultDiv.textContent = data.answer;
    } else {
      resultDiv.textContent = `오류: ${data.error}`;
    }
  } catch (err) {
    resultDiv.textContent = "서버와 통신 중 오류가 발생했습니다.";
    console.error(err);
  }
});
