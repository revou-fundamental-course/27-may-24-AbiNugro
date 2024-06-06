// Input Nama
var name = prompt("Masukan nama kamu");
document.getElementById("nama").innerText = name;

// IMG Slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 2000);

// Messages

function validateForm() {
  const form = document.forms["message-form"];
  const name = form["full-name"].value;
  const birthDate = form["birth-date"].value;
  const gender = form["gender"].value;
  const messages = form["messages"].value;

  if (name === "" || birthDate === "" || gender === "" || messages === "") {
    alert("Data tidak boleh ada yang kosong");
    return false;
  }

  // Get current date and time in text format
  const now = new Date();
  const currentDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
  const currentDateTime = `${currentDate}, ${currentTime}`;

  setSenderUI(currentDateTime, name, birthDate, gender, messages);

  // Hapus field button
  form["full-name"].value = "";
  form["birth-date"].value = "";
  form["gender"].checked = false;
  form["messages"].value = "";

  // Hapus radio button
  const genderButtons = form["gender"];
  for (let i = 0; i < genderButtons.length; i++) {
    genderButtons[i].checked = false;
  }

  return false;
}

function setSenderUI(currentDateTime, name, birthDate, gender, messages) {
  document.getElementById("sender-current-time").innerHTML = currentDateTime;
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}
