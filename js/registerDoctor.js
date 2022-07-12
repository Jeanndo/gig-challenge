document
  .getElementById("registerdoctorBtn")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const Nationality = document.getElementById("nationality").value;
    const NationalId = document.getElementById("nationalID").value;
    const sex = document.getElementById("sex").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const specialist = document.getElementById("specialist").value;
    const role = document.getElementById("role").value;

    const response = await axios({
      url: "http://localhost:8000/authentication/signup",
      method: "POST",
      data: {
        firstName: firstName,
        specialist: specialist,
        lastName: lastName,
        phone: phone,
        Address: address,
        Nationality: Nationality,
        NationalId: NationalId,
        sex: sex,
        dob: dob,
        email: email,
        password: password,
        role: role,
      },
    });

    console.log("response", response);
    document.getElementById("message__result").innerHTML =
      response?.data?.message;
  });
