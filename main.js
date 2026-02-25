document.addEventListener('DOMContentLoaded',function(){
    const btn=document.createElement(button);
    btn.textContent= 'Clique-moi';
    document.body.appendChild(btn);
    btn.addEventListener('click',function()
    {
        alert('Bonjour vous avez clique sur le boutton.');
});
});
const element= 
document.getElementById('monElement trouve');
let position=0;
functionmoveRight();{
    position +=5;
    Element.style.left= position + '5px';
    if(position<window.innerWidth-100){
        requestAnimationFrame(moveRight);
}
}
moveRight
