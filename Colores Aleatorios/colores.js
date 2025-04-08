
function GenerarColorHex() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';
    for(let i =0 ; i < 6; i++) {
        let aleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[aleatorio]; 
    }   
    return colorHex
}
function cambiarColor() {
    let color = GenerarColorHex(); 
    document.body.style.backgroundColor = color; 
    let colorTexto = document.querySelector('titulo');
    titulo = color;  
}
document.querySelector('button').addEventListener('click', cambiarColor);


















/*let cambiarColor = document.getElementById('button')
let color = document.getElementById('titulo')

let digitos = '0123456789ABCDEF';

document.addEventListener('click', e =>{
    if(e.target === cambiarColor) {
            let colorHex = '#';
            for(let i =0 ; i < 6; i++) {
                colorHex += digitos[aleatorio];      
        }
        color.innerHTML = colorHex;
        document.body.style.background = colorHex
    }
})
function aleatorio() {
    let aleatorio = Math.floor(Math.random() * 16);
}
console.log(aleatorio)*/