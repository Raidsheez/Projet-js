function popup(hideorshow) {
    if (hideorshow == 'hide') {
        document.getElementById('cookie').style.display = 'none';
    }else if(sessionStorage.getItem('done') == null){
        sessionStorage.setItem("done",1);
        document.getElementById('cookie').removeAttribute('style');
    }
}
window.onload = function pop () {
    setTimeout(function pop (){
        popup('show');
    },0);
}