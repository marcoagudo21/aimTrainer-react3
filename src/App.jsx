import { useEffect, useState } from "react";
import "./App.css";
import { cambiarPosicion } from "./logic/cambiarPosicion";

function App() {
  const [start, setStart] = useState(false);
  const [posicion, setPosicion] = useState({
    x: 0,
    y: 0,
  });
  const [mode, setMode] = useState(1000)
  const [points, setPoints] = useState(0)
  const handleSetPoints = () => {
    if(start){
      let puntos = points;
            setPoints(puntos + 10)
    }
  }
  const handleMode = (modo) => {
    setMode(modo)
    console.log("Seteo de dificultad realizado, la difultad es:" + mode);
  }
  
  const startGame = () => {
    // Evento de click en boton start
    setPoints(0)
    setStart(true);
    cambiarPosicion(setPosicion, mode, setStart);
    // Tiempo de duracion de la partida
    // setTimeout(() => {
    //   setStart(false);
    // }, 5000);
  };

  

  

  // useEffect(() => {
    
  //   if (start) {
      
  //     cambiarPosicion(setPosicion, mode);
  //   }

  // }, [start]);
  
  useEffect(() => {
    console.log(posicion);
  }, [posicion]);
  return (
    <>
      <div className="screenContainer">
        <div
        className={start ? 'screenObject' : 'd-none'}
        onClick={handleSetPoints}
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.5",
            border: "1px solid #fff",
            borderRadius: "50%",
            opacity: "0.8",
            left: "0",
            right: "0",
            top: "0",
            width: 40,
            height: 40,
            transform: `translate(${posicion.x}vw, ${posicion.y}vh)`,
          }}
          // 190vh 10vh

          // 10vh 70vh
        ></div>
        <p>{points}</p>
        <button onClick={startGame} className={start ? "d-none" : ""}>
          START
        </button>
      </div>
      <div className="displayContainer">
        <button onClick={()=> {handleMode(1000)}} className="easy">EASY</button>
        <button onClick={()=> {handleMode(800)}} className="medium">MEDIUM</button>
        <button onClick={()=> {handleMode(600)}} className="hard">HARD</button>
      </div>
    </>
  );
}

export default App;
