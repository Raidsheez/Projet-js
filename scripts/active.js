function menuAct(indexActive){
    let menu = document.getElementById("activeMenu");
    let element = menu.getElementsByClassName("itemMenu");
     element[indexActive].className += " activemenu";
}