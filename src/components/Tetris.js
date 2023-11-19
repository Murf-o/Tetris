import React from "react";
import { useState } from "react";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
//styled components
import { StyledTetris } from "./styles/StyledTetris";
import { StyledTetrisWrapper } from "./styles/StyledTetris";
//custom hooks
import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer()
  const [stage, setStage] = useStage(player)

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage}/>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score"/>
              <Display text="Rows"/>
              <Display text="Level"/>
            </div>
          )}
          <StartButton />
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;