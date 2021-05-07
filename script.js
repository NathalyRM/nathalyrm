var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

btnno.addEventListener("click", () => {
    alert("Lo lograste");
})

var coordenadas = () => {
    var ancho = window.innerWidth - 150;
    var alto = window.innerHeight - 200;
    console.log(`Ancho: ${ancho} alto: ${alto} `);
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('Ya sabias que me querias recargar :3 ');
});