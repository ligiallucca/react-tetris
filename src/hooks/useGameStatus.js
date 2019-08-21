import { useState, useEffect, useCallback } from 'react';
  
export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() =>{
    // Tem ponto?
    if(rowsCleared > 0){
      //é assim que o jogo original do tetris é calculado
      setScore(prev => prev + linePoints[rowsCleared -1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score])

  return [score, setScore, rows, setRows, level, setLevel];
};  
