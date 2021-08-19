class Game {
  constructor() {
    this.currentlyPlaying = "X";
    this.currentGameBoard = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    this.originalGameBoard = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    this.gameOver = false;
    this.winningLane = [];
  }

  switchPlayer() {
    if (this.currentlyPlaying === "X") {
      this.currentlyPlaying = "O";
      return;
    }

    this.currentlyPlaying = "X";
  }

  fillTile(position) {
    for (let i = 0; i < this.currentGameBoard.length; i++) {
      for (let j = 0; j < this.currentGameBoard[i].length; j++) {
        if (this.currentGameBoard[i][j] === position) {
          this.currentGameBoard[i][j] = this.currentlyPlaying;
        }
      }
    }

    this.switchPlayer();
    this.checkWinCondition();
  }

  checkWinCondition() {
    const winConditions = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [2, 0],
        [1, 1],
        [0, 2],
      ],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const coord1 = winConditions[i][0];
      const coord2 = winConditions[i][1];
      const coord3 = winConditions[i][2];

      if (
        this.currentGameBoard[coord1[0]][coord1[1]] ===
          this.currentGameBoard[coord2[0]][coord2[1]] &&
        this.currentGameBoard[coord2[0]][coord2[1]] ===
          this.currentGameBoard[coord3[0]][coord3[1]]
      ) {
        this.gameOver = true;
        this.winningLane = [
          this.originalGameBoard[coord1[0]][coord1[1]],
          this.originalGameBoard[coord2[0]][coord2[1]],
          this.originalGameBoard[coord3[0]][coord3[1]],
        ];
      }
    }
  }
}
