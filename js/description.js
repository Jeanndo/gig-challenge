document
  .getElementById("descriptionBtn")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const description = document.getElementById("description").value;
    const phone = document.getElementById("phone").value;

    try {
      const response = await axios({
        url: "http://localhost:8000/vitals",
        method: "POST",
        data: {
          description,
          phone,
        },
      });

      if (response) {
        document.getElementById("result__message").innerHTML =
          "Successfully sent!!";
        window.location.href = "payment.html";
      }
    } catch (error) {
      console.log(error);
    }
  });
