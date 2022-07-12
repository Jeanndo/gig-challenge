const form = document.getElementById("payForm");
form.addEventListener("submit", makePayment);

function makePayment() {
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-274e0e4df89ec0f21dfa847833a64a75-X",
    tx_ref: "ay_" + Math.floor(Math.random() * 1000000000 + 1),
    amount: document.getElementById("amount").value,
    currency: "RWF",
    customer: {
      email: document.getElementById("email").value,
      phonenumber: document.getElementById("phoneNumber").value,
      name: document.getElementById("fullName").value,
    },
    callback: function (data) {
      console.log(data);
      const reference = data.tx_ref;
      alert("payment was successfully completed" + reference);
    },
    customizations: {
      title: "Wonderful Direct pharmacy",
      description: "payment integration",
      logo: "https://image.flaticon.com/icons/png/512/809/809957.png",
    },
  });
}
