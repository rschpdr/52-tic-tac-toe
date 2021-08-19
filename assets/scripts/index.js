const game = new Game();

// Escutando os clicks nos tabuleiros por delegação de eventos
document.addEventListener("click", (event) => {
  // Verifica se o click foi em alguma das coordenadas do jogo
  if (event.target.classList.contains("tile")) {
    if (!game.gameOver) {
      // Checa se essa posição já não está preenchida
      if (!event.target.innerText) {
        const position = parseInt(event.target.id);

        // Atualizar a div no DOM com o jogador atual
        event.target.innerText = game.currentlyPlaying;

        // Preencher tabuleiro virtual
        game.fillTile(position);
      }
    }

    // Pintar o fundo das peças vencedoras
    console.log(game.winningLane);
    // Itera sobre cada coordenada vencedora
    game.winningLane.map((coord) => {
      // Seleciona a div com o id igual à coordenada vencedora
      const winningTile = document.getElementById(coord.toString());

      // Adiciona classes pra pintar o fundo e a fonte dessa coordenada
      winningTile.classList.add("bg-info", "text-white");
    });
  }
});
