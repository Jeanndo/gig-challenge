document
  .getElementById("patientregister")
  .addEventListener("click", async (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstname").value;
    const middleName = document.getElementById("middlename").value;
    const lastName = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const address = document.getElementById("address").value;
    const nationality = document.getElementById("nationality").value;
    const nationalID = document.getElementById("nationalID").value;
    const sex = document.getElementById("sex").value;
    const dateofbirth = document.getElementById("dateofbirth").value;
    const insurance = document.getElementById("insurance").value;
    try {
      const response = await axios({
        url: "http://localhost:8000/authentication/signup",
        method: "POST",
        data: {
          firstName: firstName,
          midlleName: middleName,
          lastName: lastName,
          phone: phone,
          Address: address,
          Nationality: nationality,
          NationalId: nationalID,
          Insurance: insurance,
          sex: sex,
          dob: dateofbirth,
          email: email,
          password: password,
          role: role,
        },
      });

      if (response) {
        document.getElementById("message__result").innerHTML =
          response?.data?.message;
        window.location.href = "description.html";
      }
    } catch (error) {
      console.log(error);
    }
  });
