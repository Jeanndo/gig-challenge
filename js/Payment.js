document.getElementById("momopay").addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    let amount = document.getElementById("amount");
    let phone = document.getElementById("phone");
    const response = await axios({
      url: "http://localhost:8000/payments/pay",
      method: "GET",
      data: {
        amount: amount,
        phone: phone,
      },
    });

    document.getElementById("payment__result").innerHTML =
      response?.data?.message;

    if (response) {
      window.location.href = "result.html";
      console.log(response?.data?.message);
    }
  } catch (error) {
    console.log(error);
  }
});
