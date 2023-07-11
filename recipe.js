function welcome() {
    alert('Welcome to my page!')
}
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('button').onclick = welcome;
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#dark').onclick = () => {
        document.querySelector('body').style.backgroundColor = 'hsl(230, 20%, 20%)';
        document.querySelector('section').style.backgroundColor = 'hsl(230, 20%, 50%)';
        document.querySelector('h1').style.color = 'hsl(350, 20%, 80%)';
        const nodeLinks = document.querySelectorAll('.list');
        for (let i = 0; i < nodeLinks.length; i++) {
            nodeLinks[i].style.color = 'hsl(350, 20%, 80%)';
        }
    
    }
})