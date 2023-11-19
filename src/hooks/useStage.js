import { useEffect, useState } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const[stage, setStage] = useState(createStage());

   useEffect(() =>{
    const updateStage = prevStage =>{
      //Flush the stage
      const newStage = prevStage.map(row => row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell ))) //keep collided tetromino as normal

      //draw tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if(value !== 0){
            newStage[y + player.pos.y][x + player.pos.x] = [
              value, 
              `${player.collided ? 'merged' : 'clear'}`,
            ]
          }
        })
      })
      return newStage;
    }
    setStage(prev => updateStage(prev))
   }, [player])

  return [stage, setStage];
}