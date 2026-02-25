// pour telechager
document.querySelector('a[download]').forEach(link => {
    link.addEventListener('click',(e)=>{
        const resourceName= e.target.textContent;
        alert('Vous allez telecharger:$ {resource}')
    })
});
