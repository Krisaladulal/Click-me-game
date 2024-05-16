
function myfunction() {
  var ele = document.getElementById("error");

//   ele.style.marginTop = Math.random() * window.innerHeight + "px";
//   ele.style.marginLeft = Math.random() * window.innerWidth + "px";
   setTimeout(() => {
    ele.style.marginTop = Math.random() * window.innerHeight + "px";
    ele.style.marginLeft = Math.random() * window.innerWidth + "px";
  }, 450);
}

