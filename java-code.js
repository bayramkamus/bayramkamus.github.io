/*kaydırma özelliği için*/
let previousScrollPosition = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPosition = window.pageYOffset;

  if (previousScrollPosition > currentScrollPosition) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
  }
  previousScrollPosition = currentScrollPosition;
};

/*saat kısmı*/

function myTimer() {
  const d = new Date();
  document.getElementById("saat").innerHTML = d.toLocaleTimeString();
}
let myVar = setInterval(myTimer, 1000);
myTimer();


/*form kısmı*/
function formuDogrula() {
  const isim = document.getElementById("isim").value.trim();
  const email = document.getElementById("email").value.trim();
  const mesaj = document.getElementById("mesaj").value.trim();
  const hataMesaji = document.getElementById("hataMesaji");

  hataMesaji.textContent = "";

  if (isim === "") {
    hataMesaji.textContent = "Lütfen isminizi giriniz.";
    return false;
  }

  const emailDeseni = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    hataMesaji.textContent = "Lütfen e-posta adresinizi giriniz.";
    return false;
  } else if (!emailDeseni.test(email)) {
    hataMesaji.textContent = "Lütfen geçerli bir e-posta adresi giriniz.";
    return false;
  }

  if (mesaj === "") {
    hataMesaji.textContent = "Lütfen bir mesaj giriniz.";
    return false;
  }

  alert("Form başariyla gönderildi!");
  return true;
}

/*project kısmı*/

function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    // belirtilen kategoriye göre göster veya gizle
    if (project.getAttribute("data-category").includes(category)) {
      project.style.display = "inline-block";
    } else {
      project.style.display = "none";
    }
  });
}
filterProjects("");

/*fazla gör veya az gör*/
function toggleText() {
  const extraText = document.getElementById("extra-text");
  const toggleButton = document.getElementById("toggle-button");

  if (extraText.style.display === "none") {
    extraText.style.display = "inline";
    toggleButton.textContent = "Daha az gör";
  } else {
    extraText.style.display = "none";
    toggleButton.textContent = "Daha fazla gör";
  }
}
