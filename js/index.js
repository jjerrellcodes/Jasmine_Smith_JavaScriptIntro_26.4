const body = document.querySelector("body");
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Jasmine Smith, ${thisYear}`;
footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.querySelector('[name="leave_message"]');

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  
  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;
  console.log(name, email, message);

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
  <span>${message}</span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", function (event) {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage); 
  messageForm.reset(); // Clears out data in form
});
