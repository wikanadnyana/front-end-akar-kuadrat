document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate-button");
  const calculateInput = document.getElementById("calculate-input");
  const resultElement = document.querySelector(".container h1");

  calculateButton.addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = parseFloat(calculateInput.value);

    if (isNaN(inputValue)) {
      alert("Masukkan angka yang valid!");
      return;
    }

    fetch("https://api-akar-kuadrat-production.up.railway.app/api/calculate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.calculation) {
          resultElement.textContent = data.calculation;
          console.log(data.calculation);
        } else {
          alert(
            "Tidak dapat menghitung akar kuadrat. Pastikan angka lebih dari nol atau tidak melebihi kapasitas."
          );
        }
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  });
});
