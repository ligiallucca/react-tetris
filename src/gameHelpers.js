export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;


//um array multidimensional que cria um grid através de outro array criado através da altura do "stage" onde por cada linha será criado um novo array  atráves da largura do "stage" que será preenchido por outro array que começará em zero e irá até 'limpar'
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), ()=>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y+=1) {
    for (let x = 0; x < player.tetromino[0].length; x+=1) {
      // 1.Checando se estamos realmente em uma célula de um "tetromino"
      if(player.tetromino[y][x] !== 0) {
        if(
        // 2. Checando se o movimento está dentro da altura da área do jogo
        // Não deve passar no fim da área de jogo
        !stage[y + player.pos.y + moveY] || 
        // 3. Checando se o movimento está dentro da largura da área do jogo
        !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
        // 4. Checando se a célula por onde está indo o movimento não está setada como "clear"
        stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
} 