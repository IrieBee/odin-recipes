function welcome() {
    alert('Welcome to my page!')
}
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('button').onclick = welcome;
})