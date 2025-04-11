
/* Forma propia */
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
    let colorTexto = document.querySelector('.titulo');
    colorTexto.innerText = color;  
}
let boton = document.querySelector('button');
boton.addEventListener('click', cambiarColor);



/* Ejercicio con ayuda del profesor, inicializando con un hexadecimal por defecto (Negro, en este caso)
function GenerarColorHex() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';
    for(let i =0 ; i < 6; i++) {
        let aleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[aleatorio]; 
    }   
    return colorHex
}

let ColorTexto = document.querySelector('.titulo');

ColorTexto.innerText = "#000000"
document.body.style.backgroundColor = "#000000"; 


let boton = document.querySelector('button');
boton.addEventListener('click', ()=> {
    let color = GenerarColorHex(); 
    document.body.style.backgroundColor = color; 
    ColorTexto.innerText = color;  
});
*/



















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