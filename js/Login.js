document.getElementById("loginBtn").addEventListener("click", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    const response = await axios({
      url: "http://localhost:8000/authentication/login",
      method: "POST",
      data: {
        email,
        password,
        role,
      },
    });

    if (response?.data?.hasOwnProperty("patient")) {
      window.location.href = "description.html";
    } else if (response?.data?.hasOwnProperty("doctor")) {
      window.location.href = "Dashboard.html";
    }

    // console.log(typeof response);
    localStorage.setItem("user", JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
});

//./description.html
