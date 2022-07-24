console.log("Hello world");

const getPatientResult = async () => {
  try {
    const response = await axios({
      url: "http://localhost:8000/responses",
      method: "GET",
    });
    console.log("response", response?.data?.allResponses);
    const patientPhoneNumber = JSON.parse(localStorage.getItem("user"))?.patient
      ?.phone;
    console.log(patientPhoneNumber);

    document.getElementById("result").innerHTML = response?.data?.allResponses
      .map(
        (response) =>
          `<div class="result__area">
            <p>
              ${
                response.patientPhone === patientPhoneNumber &&
                response.response
              }
            </p>
          </div>
          `
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
};
getPatientResult();
