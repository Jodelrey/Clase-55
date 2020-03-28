['casa', 'coronavirus', 'cuarentena', 'comida']

//Encontrar la palabra con mayor puntaje
//Cada letra tiene una puntuacion segun la posicion en el alfabeto: a = 0, z =26
//La puntuacion de una palabra es la suma de la puntuacion de todas sus letras

//*Obtener la puntuacion de una letra letra
//*Por cada palabra sumar los puntajes en cada una de sus letras
//Comparar los puntajes de cada palabra y devolver la palabra con mayor puntaje

const palabraConMasPuntaje = (palabras) =>{
    const puntajeLetra = letra => "abcdefghijklmnñopqrstuvwxyz".indexOf(letra)
    const puntajePalabra = palabra => [...palabra].reduce((suma, letra) => suma + puntajeLetra(letra), 0)//reduce solo puede aplicarse a array, palabra es un string. Por lo tanto se hace un spread dentro de un array de "palabra" y con eso se obtiene un array de letras de esa palabra. Luego se reduce al puntaje
    return palabras.reduce((palabraConMayorPuntaje, palabra) => puntajePalabra(palabraConMayorPuntaje) > putanjePalabra(palabra) ? palabraConMayorPuntaje : palabra)
}

//OTRA FORMA

const palabraConMasPuntaje = (palabras) => {
    const puntajeLetra = letra => "abcdefghijklmnñopqrstuvwxyz".indexOf(letra)
    const aPuntajePalabra = (suma, letra) => suma + puntajeLetra(letra)
    const puntajePalabra = palabra => [...palabra].reduce(aPuntajePalabra, 0)
    const aPalabraConMasPuntaje = (palabraMayor, palabra) => puntajePalabra(palabraMayor) > puntajePalabra(palabra) ? palabraMayor : palabra  
    return palabras.reduce(aPalabraConMasPuntaje)
  }

  
  //
  const animales = [
      { nombre : 'Sapo'},
      { nombre : 'Leon'},
      { nombre : 'Foca'},
      { nombre : 'Sapo'},

  ]

  const animalMasRepetido = animales =>{

    const aCantidades = (cantidades, animal) => {
        cantidades[animal.nombre] =  cantidades[animal.nombre] + 1 || 1
        return cantidades
    }

    //primero tengo que fijarme si el reduce devuelve exactamente la misma estructura que el objeto que recorre
    const cantidades = animales.reduce(aCantidades, {})
    const nombres = Object.keys(cantidades)
    const aMayorCantidad = (masRepetido, animal) => cantidades[animal] >cantidades[masRepeticiones] ? animal : masRepetido
    return nombres.reduce(aMayorCantidad)
  }




  const animales = [
    { nombre: 'Sapo' }, 
    { nombre: 'Leon' },
    { nombre: 'Foca' },
    { nombre: 'Sapo' }
  ]
  
  // Leon
    //resultado a obtener
//   const cantidades = [
//     { nombre: 'Sapo', repeticiones: 2 }, 
//     { nombre: 'Leon', repeticiones: 1 }, 
//     { nombre: 'Foca', repeticiones: 1 } 
//   ]
  
  const aCantidades = (cuentaParcial, animal) => {
    const existe = cuentaParcial.some(cantidad => cantidad.nombre === animal.nombre)
  
    if (!existe) {
      return [...cuentaParcial, {nombre: animal.nombre, repeticiones: 1}]
    } else {
      return cuentaParcial.map(
        cuenta => 
          cuenta.nombre === animal.nombre ?
          {
            ...cuenta, 
            repeticiones: cuenta.repeticiones + 1
          } :
          cuenta
      )
    }
  }
  
  animales.reduce(aCantidades, [])
  