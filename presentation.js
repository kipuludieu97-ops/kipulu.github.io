// Creer et ajouter un boutton a la page
window.addEventListener('DOMContentLoaded',()=>{
    const btn= 
    document.createElement('button');
    btn.textContent='En savoir plus';
    document.body.appendChild(btn);
    // Pour evenement clic pour afficher une alerte
    btn.addEventListener('click',()=>{
        alert('Voici plus d\'informations sur notre presentation.');
    })
});
