import { Component, OnInit } from '@angular/core';

import { HashService } from './shared';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})

export class HashComponent implements OnInit {
  // injetamos o service no component, e definimos métodos retornando os criados no service para que fiquem acessíveis

  constructor(private hashService: HashService) { }

  ngOnInit() {
  	this.hashService.initialize();
  }

  /**
  * Retorna se a tela de início deve ser exibida.
  *
  * @return boolean
  */
  get showStart(): boolean {
  	return this.hashService.showStart;
  }

  /**
  * Retorna se o tabuleiro deve ser exibido.
  *
  * @return boolean
  */
  get showBoard(): boolean {
  	return this.hashService.showBoard;
  }

  /**
  * Retorna se a tela de fim de jogo deve ser exibida.
  *
  * @return boolean
  */
  get showFinal(): boolean {
  	return this.hashService.showFinal;
  }

  /**
  * Retorna o número do jogador a jogar.
  *
  * @return number
  */
  get player(): number {
  	return this.hashService.player;
  }

  /**
  * Inicializa os dados de um novo jogo.
  *
  * @return void
  */
  startGame(): void {
  	this.hashService.startGame();
  }

  /**
  * Realiza uma jogada ao clicar um local no tabuleiro.
  *
  * @param number posX
  * @param number posY
  * @return void
  */
  play(posX: number, posY: number): void {
  	this.hashService.play(posX, posY);
  }

  /**
  * Retorna se a peça X deve ser exibida para a coordena informada.
  *
  * @param number posX
  * @param number posY
  * @return boolean
  */
  showX(posX: number, posY: number): boolean {
  	return this.hashService.showX(posX, posY);
  }

  /**
  * Retorna se a peça O deve ser exibida para a coordena informada.
  *
  * @param number posX
  * @param number posY
  * @return boolean
  */
  showO(posX: number, posY: number): boolean {
  	return this.hashService.showO(posX, posY);
  }

  /**
  * Retorna se a marcação de vitória deve ser exibida para a coordena informada.
  *
  * @param number posX
  * @param number posY
  * @return boolean
  */
   showVictory(posX: number, posY: number): boolean {
  	return this.hashService.showVictory(posX, posY);
  }

  /**
  * Inicia um novo jogo.
  *
  * @return void
  */
  newGame(): void {
  	this.hashService.newGame();
  }
}
