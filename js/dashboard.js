// @ts-nocheck
// if (JSON.parse(localStorage.getItem("user")) === null) {
//   location.href = "./../pages/login.html";
// }
// console.log(localStorage.getItem("userInfo"));
// ToolBar

const LoggedInUser = JSON.parse(localStorage.getItem("user"));
// console.log(LoggedInUser.doctor.email);

const toolbar = document.getElementById("toolbar");
const menu = document.getElementById("menu");
const Secondmenu = document.getElementById("menu1");
const sideBar = document.getElementById("sidebar");
const list = document.getElementById("list");

menu.addEventListener("click", (event) => {
  event.preventDefault();
  toolbar.style.marginLeft = "145px";
  menu.style.display = "none";
  sideBar.style.width = "12%";
  list.style.display = "inline";
  Secondmenu.style.display = "block";
});

Secondmenu.addEventListener("click", (event) => {
  event.preventDefault();
  toolbar.style.marginLeft = "0px";
  menu.style.display = "block";
  Secondmenu.style.display = "none";
  list.style.display = "none";
  sideBar.style.width = "5%";
});

// MAIN BODY CONENTS

// GET DOM ELEMENTS BY IDs

const mainBody = document.getElementById("main");
const BlogTab = document.getElementById("blogTab");
const ProjectTab = document.getElementById("projectTab");
const UserTab = document.getElementById("userTab");
const projectForm = document.getElementById("projects__form");
const blogForm = document.getElementById("message__body");
const users = document.getElementById("user__form");
const messages = document.getElementById("messages");

// SIDE BAR TAB BUTTONS

const user__button = document.getElementById("user__button");
const blog__button = document.getElementById("blog__button");
const project__button = document.getElementById("project__button");
const message__button = document.getElementById("message__button");
const sub__button = document.getElementById("sub__button");

// HIDDING DASHBOARD CONTENTS

users.style.display = "none";
// projectForm.style.display = "none";
blogForm.style.display = "none";
messages.style.display = "none";
subscribers.style.display = "none";

// SIDE BAR FUNCTIONALITY HANDLING

UserTab.addEventListener("click", (event) => {
  event.preventDefault();
  blogForm.style.display = "none";
  users.style.display = "block";
  messages.style.display = "none";
  subscribers.style.display = "none";
  // getAllPatientsSigns();
});

user__button.addEventListener("click", (event) => {
  event.preventDefault();
  blogForm.style.display = "none";
  users.style.display = "block";
  messages.style.display = "none";
  subscribers.style.display = "none";
  // getAllPatientsSigns();
});

BlogTab.addEventListener("click", (event) => {
  event.preventDefault();
  blogForm.style.display = "block";
  users.style.display = "none";
  messages.style.display = "none";
  subscribers.style.display = "none";
});

blog__button.addEventListener("click", (event) => {
  event.preventDefault();
  blogForm.style.display = "block";
  users.style.display = "none";
  messages.style.display = "none";
  subscribers.style.display = "none";
});

// Messages

// document.getElementById("message__body").location.reload(true);

// DISPLAY ALL PATIENTS VITAL SIGNS

const getAllPatientsSigns = async () => {
  try {
    const response = await axios({
      url: "http://localhost:8000/vitals",
      method: "GET",
    });
    document.getElementById("user__form").innerHTML = response?.data?.vitals
      .map(
        (vital) =>
          `<form> 
          <div class="result__area">
                    <div class="patientinfo">
                      <div>
                        <span>${vital?.patientName}</span>
                      </div>
                      <div>
                        <span>${vital?.patientEmail}</span>
                      </div>
                      <div>
                        <span id="patientPhoneNumber">${
                          vital?.patientPhone
                        }</span>
                      </div>
                      <div>
                        <span>${
                          vital?.payementStatus ? "Paid" : "Not Paid"
                        }</span>
                      </div>
                    </div>
                    <p>
                     ${vital?.description}
                    </p>
                  </div>
                  <div>
                    <textarea
                      id="response"
                      rows="10"
                      class="response"
                      placeholder="response"
                    >
                    
                  </textarea
                    >
                  </div>
                  <div class="response__action">
                    <button id="responseBtn">Respond</button>
                  </div>
                </form>`
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
  document
    .getElementById("responseBtn")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      respond();
    });
};
getAllPatientsSigns();

// RESPOND TO PATIENT VITAL SIGNS

async function respond() {
  try {
    const phone = document.getElementById("patientPhoneNumber").innerText;
    const response = document.getElementById("response").value;
    const LoggedInUser = JSON.parse(localStorage.getItem("user"));
    const responseData = await axios({
      url: "http://localhost:8000/responses",
      method: "POST",
      data: {
        response: response.trim(),
        email: LoggedInUser?.doctor?.email,
        patientPhone: phone,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// DISPLAY ALL MESSAGES

const getAllMessages = async () => {
  try {
    const messages = await axios({
      url: "http://localhost:8000/messages",
      method: "GET",
    });

    document.getElementById("message__body").innerHTML =
      messages?.data?.data?.allMessages
        .map(
          (message) =>
            `
             <div class="form__container ">
              <div class="patient__message_body">
                <div class="patient__name">
                <small>${message?.firstName} &nbsp; &nbsp; ${message?.lastName}</small>
                </div>
                <div class="patient__message__subject">
                  <small>${message?.subject}</small>
                </div>
                <div class="patient__message__subject">
                  <p>${message?.message}</p>
                </div>
              </div>
              <div class="deleteMsgBtn" onclick="deleteMessage('${message?._id}')">
                <button>Delete</button>
              </div>
            </div>
            `
        )
        .join("");
  } catch (error) {
    console.log(error);
  }
};

getAllMessages();

//DELETE A MESSAGE

async function deleteMessage(msgId) {
  try {
    const response = await axios({
      url: `http://localhost:8000/messages/${msgId}`,
      method: "DELETE",
    });

    if (response) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
