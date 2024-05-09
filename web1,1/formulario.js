const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function(){
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    
//constGenero = document.getElementById('genero').value

    console.log('el nombre es'+ nombre);
    console.log('el email es'+ email);
    console.log('hola alumno');
    
  
})

alert('los datos se guardaron exitosamente')
