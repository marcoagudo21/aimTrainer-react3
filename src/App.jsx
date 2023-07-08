import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);
  const [posicion, setPosicion] = useState({
    x: 0,
    y: 0,
  });

  const startGame = () => {
    // Evento de click en boton start
    setStart(true);
    // Tiempo de duracion de la partida
    setTimeout(() => {
      setStart(false);
    }, 5000);
  };

  useEffect(() => {
    const cambiarPosicion = () => {
      const imprimirArrayConIntervalo = (array, index = 0) => {
        if (index < array.length) {
          setTimeout(() => {
            console.log(array[index]);
            imprimirArrayConIntervalo(array, index + 1);
          }, 2000);
        }
      };
      
      const arrPosiciones = [];
      for (let i = 0; i < 20; i++) {
        
          let clientX = Math.round(Math.random() * (190 - 10) + 10);
          let clientY = Math.round(Math.random() * (70 - 10) + 10);
          arrPosiciones.push({
            x: clientX,
            y: clientY
          })

          // Cambiamos el tiempo de espera a 0 milisegundos
        }
        
        if (arrPosiciones.length === 20) {
          imprimirArrayConIntervalo(arrPosiciones);
        }
        
        
      }
    
  
    cambiarPosicion();

  }, [start]);
  
  if (start) {
  }

  return (
    <>
      <div className="screenContainer">
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.5",
            border: "1px solid #fff",
            borderRadius: "50%",
            opacity: "0.8",
            pointerEvents: "none",
            left: "0",
            right: "0",
            top: "0",
            width: 40,
            height: 40,
            transform: `translate(10vh, 70vh)`,
          }}
          // 190vh 10vh

          // 10vh 70vh
        ></div>
        <p>0</p>
        <button onClick={startGame} className={start ? "d-none" : ""}>
          START
        </button>
      </div>
      <div className="displayContainer">
        <button className="easy">EASY</button>
        <button className="medium">MEDIUM</button>
        <button className="hard">HARD</button>
      </div>
    </>
  );
}

export default App;
