document
  .getElementById("contactBtn")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    let footerfirstname = document.getElementById("footerfirstname");
    let footerlastname = document.getElementById("footerlastname");
    let footerphone = document.getElementById("footerphone");
    let footersubject = document.getElementById("footersubject");
    let footermessage = document.getElementById("footermessage");

    const response = await axios({
      url: "http://localhost:8000/messages",
      method: "POST",
      data: {
        firstName: footerfirstname.value,
        lastName: footerlastname.value,
        phone: footerphone.value,
        subject: footersubject.value,
        message: footermessage.value,
      },
    });

    console.log("response", response);
    document.getElementById("footer__result").innerHTML =
      response?.data?.message;
  });
