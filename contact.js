// pour contact
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();//Empeche envoi du formulaire
    alert('Votre message a été envoyé. Merci de nous contacter')
});
// pour changer le couleur element
const element=
document.getElementById('monElent');
functionchangeColor();{
    element.style.backgroundColor='#'+
    Math.floor(Math.random()*16777215).toString(16);
    setInterval(changeColor,1000);
}