export const cambiarPosicion = (setPosicion, mode = 1000, setStart) => {
    const imprimirArrayConIntervalo = (array, index = 0) => {
      if (index < array.length) {
        
        setTimeout(() => {
          // console.log(array[index]);
          setPosicion(array[index])
          console.log(index);
          if (index === 30) {
            setTimeout(() => {
              setStart(false)
            }, mode + 500);
          }
          imprimirArrayConIntervalo(array, index + 1);
        }, mode);
        
      }
    };
    
    const arrPosiciones = [];
    for (let i = 0; i <= 30; i++) {
      
        let clientX = Math.round(Math.random() * (95 - 10) + 10);
        let clientY = Math.round(Math.random() * (70 - 10) + 10);
        arrPosiciones.push({
          x: clientX,
          y: clientY
        })
        if (i === 30) {
          
        }
        // Cambiamos el tiempo de espera a 0 milisegundos
      }
      
      if (arrPosiciones.length === 31) {
        imprimirArrayConIntervalo(arrPosiciones);
      }
      
      
    }