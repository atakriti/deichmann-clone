list.style.display = "none"
function btn() {
  let list = document.getElementById("list");
  if (list.style.display === "none") {
    list.style.display = "block";
    list.style.animationName = "listDown";
  } else {
    list.style.display = "none"
  }
}

function sectionBtn() {
  let list = document.getElementById("list");
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}

function main() {
  let list = document.getElementById("list");
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "none";
  }
}
