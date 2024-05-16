const formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function(){
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    
//constGenero = document.getElementById('genero').value

    console.log('los nombres son'+ nombre);
    console.log('el email es'+ email);
    console.log('hola alumno');
    console.log('hola vida');
    



  
})

alert('los datos se guardaron exitosamente')
