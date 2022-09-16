var check = document.querySelector('#switch');

check.addEventListener('click', idioma);

function idioma(){
  let id = check.checked;
  if(id == true){
    location.href = "en/index.html";
  } else {
    location.href = "../index.html";
  }
}