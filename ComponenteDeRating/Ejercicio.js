let pedirNumber = parseInt(prompt("Ingrese la cantidad de Ventas"),0);
function arrayNumeroVentas(ventas){
  let arrVentas = [];
  for(let i = 0; i < ventas; i++){
    let elementos = parseInt(prompt(`Ingrese el elemento ${i+1}: `));
    arrVentas.push(elementos);
  }
  console.log(arrVentas);
  return arrVentas;
}

function comparacionVentas(arrays){
  let contA = 0;
  let contB = 0;
  let contC = 0;

  let sumA =0;
  let sumB =0;
  let sumC =0;

  for(let array of arrays){
    if(array >= 1000){
      contA++;
      sumA += array
    }else if(array <= 500){
      contB++;  
      sumB += array
    }else{
      contC++;
      sumC += array
    } 
  }
  console.log(`Existen ${contA} mayores o iguales a  1000 y la suma es ${sumA}`)
  console.log(`Existen ${contB} menores o iguales a 500 y la suma es ${sumB} `)
  console.log(`Existen ${contC} entre 500 y 1000 y la suma es ${sumC}`)
  console.log(`La suma total es: ${sumA+sumB+sumC}`)
}

comparacionVentas(arrayNumeroVentas(pedirNumber))

