
// Ejercicio2: Cambiar los Atributos de los elementos del DOM

// 2.1 Seleccionar elemento del DOM
/** 
 * 1. Seleccionar el elemento h1 con querySelector
 * 2. Cambiar el titulo por "Hola Mundo"
 * 3. Ver el efecto en el navegador
 */

/*(cambiar titulo)*/
/*let titulo = document.querySelector('#titulo')
titulo.innerText = "Mamarre"
console.log(titulo)*/


// 2.2 Cambiar el atributo src de la imagen
/**
 * 1. Seleccionar la imagen con querySelector
 * 2. Cambiar su atributo src por "imagen/carita.png"
 * 3. Ver el efecto en el navegador
 */

/*(cambiar imagen)*/
/*let imagen = document.querySelector('img')
imagen.src = "imagen/carita.png"
console.log(imagen);*/

// 2.3 Cambiar la clase del div
/**
 * 1. Seleccionar el div main-div con querySelector
 * 2. Cambiar su clase por "new-div"
 * 3. Ver el efecto en el navegador
 */
/*(cambia atributo)*/
/*let miDiv = document.querySelector('.main-div')
miDiv.className = "main-div new-div";
console.log(miDiv)*/
 

// 2.4 Cambiar el atributo href del enlace
/**
 * 1. Seleccionar el enlace con querySelector usando su id
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de su atributo href por consola con getAttribute
 * 2. Cambiar su atributo href por "https://www.icesi.edu.co"
 * 3. Cambiar su texto por "Universidad Icesi"
 * 4. Cambiar su atributo target por "_blank"
 * 5. Cambiar su clase por "boton"
 * 6. Ver el efecto en el navegador
 * 7. Eliminar la clase del enlace
 * 8. Ver el efecto en el navegador
 */

let direccion = document.querySelector('#enlace')
console.log(enlace.getAttribute("href"));
enlace.setAttribute("href", "https://www.icesi.edu.co")
enlace.innerText = "Universidad ICESI"
enlace.setAttribute("target","_blanck")
direccion.setAttribute("class", "boton")
direccion.removeAttribute("class")
console.log(direccion);

// 2.5 Cambiar el estilo del div
/**
 * 1. Seleccionar el div con querySelector
 * 2. Cambiar su estilo por:
 *    - background-color: green
 *    - color: white
 *    - font-size: 30px
 *    - font-family: Arial
 *    - text-align: center
 *    - padding: 20px
 *    - border-radius: 10px
 * 3. Ver el efecto en el navegador
 */

let miDiv = document.querySelector(".main-div");
miDiv.style.backgroundColor = "green"
miDiv.style.color = "white"
miDiv.style.fontSize = "30px"
miDiv.style.textAlign = "center"
miDiv.style.padding = "20px"
miDiv.style.borderRadius = "10px"
console.log(miDiv)




