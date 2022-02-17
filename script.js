    function CalcularMedia(lista){
        
       // let suma = 0;
        
        // for(i = 0; i<lista.length; i++){

        //     suma = suma + lista[i];
        // }

        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, NuevoValor){
                return valorAcumulado + NuevoValor;
            }
        );
        
        const resultado = sumaLista / lista.length;
        
        return resultado;
    }

function espar(numero){

    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

test = [1,2,3,4,5];

function CalcularMediana(lista){

    const ListaOrdenada = lista.sort(function(a,b){
        return a-b;
    });

    if (espar(ListaOrdenada.length)){
    
     const elemento1 = ListaOrdenada[parseInt(ListaOrdenada.length / 2) - 1];
     const elemento2 = ListaOrdenada[parseInt(ListaOrdenada.length / 2)];
     
     const promedioElemento1y2 = CalcularMedia([elemento1,elemento2]);
      
     let mediana = promedioElemento1y2;
     return mediana;
    
    }else{
        mediana = ListaOrdenada[parseInt(ListaOrdenada.length/2)];
        return mediana;
    }

}

// Calcular Moda //

// moda = [6,3,7,8,5,3,1,5,2,9,6,8,7,3,4,2];

// ordenado = moda.sort(function(a,b){
//     return a-b;
// });

// const listaCount = {};

// moda.map(
//     function(elemento){
//         if (listaCount[elemento]){
//             listaCount[elemento] += 1;
//         }
//         else{
//             listaCount[elemento] = 1;
//         }
//     }
// );


// const ListaConvertida = Object.entries(listaCount).sort(
//     function(valorAcumulado, NuevoValor){
//         return valorAcumulado[1] - NuevoValor[1];
//     }
// );

// const modaResult = ListaConvertida[ListaConvertida.length - 1];

// console.log(modaResult);


function CalcularModa(lista){

    const listaCount = {};

    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }
            else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaConvertida = Object.entries(listaCount).sort(
        function(valorAcumulado, NuevoValor){
            return valorAcumulado[1] - NuevoValor[1];
        }
    );

    const modaFinal = listaConvertida[listaConvertida.length -1];
    return modaFinal; 
}