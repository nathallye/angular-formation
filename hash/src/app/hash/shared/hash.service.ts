import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HashService {

  // ATRIBUTOS DE CLASSE
  private readonly BOARD_SIZE: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any; // tabuleiro
  private numMovements: number;
  private victory: any;

  private _player: number;
  private _showStart: boolean;
  private _showBoard: boolean;
  private _showFinal: boolean;

  constructor() { }

  /**
  * Inicializa o jogo. Define exibição da tela inicial.
  *
  * @return void
  */
  initialize(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showFinal = false;
    this.numMovements = 0;
    this._player = this.X;
    this.victory = false;
    this.initializeBoard();
  }

  /**
  * Inicializa o tabuleiro do jogo com vazio para todas as posições.
  *
  * @return void
  */
  initializeBoard(): void {
    this.board = [this.BOARD_SIZE];
    for (let i = 0; i < this.BOARD_SIZE; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  /**
  * Retorna se a tela de início deve ser exibida.
  *
  * @return boolean
  */
  get showStart(): boolean {
    return this._showStart;
  }

  /**
  * Retorna se o tabuleiro deve ser exibido.
  *
  * @return boolean
  */
  get showBoard(): boolean {
    return this._showBoard;
  }

  /**
  * Retorna se a tela de fim de jogo deve ser exibida.
  *
  * @return boolean
  */
  get showFinal(): boolean {
    return this._showFinal;
  }

  /**
  * Retorna o número do jogador a jogar.
  *
  * @return number
  */
  get player(): number {
    return this._player;
  }

  /**
  * Exibe o tabuleiro.
  *
  * @return void
  */
  startGame(): void {
    this._showStart = false; // esconde a tela de inicio
    this._showBoard = true; // e exibe o tabuleiro
  }

  /**
  * Realiza uma jogada dado as coordenadas do tabuleiro.
  *
  * @param number posX
  * @param number posY
  * @return void
  */
  play(posX: number, posY: number): void {
    // jogada inválida
    if (this.board[posX][posY] !== this.EMPTY || this.victory) { // se existe um valor na posição(diferente de vazio) ou alguém já venceu
      return;
    }

    this.board[posX][posY] = this._player;
    this.numMovements++;
    this.victory = this.endGame(posX, posY, this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

    if (!this.victory && this.numMovements < 9) {
      this.cpuPlay();
    }

    // houve vitória
    if (this.victory !== false) {
      this._showFinal = true;
    }

    // empate
    if (!this.victory && this.numMovements === 9) {
      this._player = 0;
      this._showFinal = true;
    }
  }

  /**
  * Verifica e retorna se o jogo terminou.
  *
  * @param number linha
  * @param number coluna
  * @param any tabuleiro
  * @param number jogador
  * @return array
  */
  endGame(line: number, column: number, board: any, player: number) {
    let end: any = false;

    // valida a linha
    if (board[line][0] === player &&
      board[line][1] === player &&
      board[line][2] === player) {
      end = [[line, 0], [line, 1], [line, 2]];
    }

    // valida a coluna
    if (board[0][column] === player &&
      board[1][column] === player &&
      board[2][column] === player) {
      end = [[0, column], [1, column], [2, column]];
    }

    // valida as diagonais
    if (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) {
      end = [[0, 0], [1, 1], [2, 2]];
    }

    if (board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player) {
      end = [[0, 2], [1, 1], [2, 0]];
    }

    return end;
  }

  /**
  * Lógica para simular jogada do computador em modo aleatório.
  *
  * @return void
  */
  cpuPlay(): void {
    // verifica jogada de vitória
    let move: number[] = this.getPlay(this.O);

    if (move.length <= 0) {
      // tenta jogar para evitar derrota
      move = this.getPlay(this.X);
    }

    if (move.length <= 0) {
      // joga aleatório
      let moves: any = [];
      for (let i = 0; i < this.BOARD_SIZE; i++) {
        for (let j = 0; j < this.BOARD_SIZE; j++) {
          if (this.board[i][j] === this.EMPTY) {
            moves.push([i, j]);
          }
        }
      }

      let k = Math.floor((Math.random() * (moves.length - 1)));
      move = [moves[k][0], moves[k][1]];
    }

    this.board[move[0]][move[1]] = this._player;
    this.numMovements++;
    this.victory = this.endGame(move[0], move[1], this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;
  }

  /**
  * Obtém uma jogada válida para vitória de um jogador.
  *
  * @param number jogador
  * @return number[]
  */
  getPlay(player: number): number[] {
    let tab = this.board;
    for (let lin = 0; lin < this.BOARD_SIZE; lin++) {
      for (let col = 0; col < this.BOARD_SIZE; col++) {
        if (tab[lin][col] !== this.EMPTY) {
          continue;
        }
        tab[lin][col] = player;
        if (this.endGame(lin, col, tab, player)) {
          return [lin, col];
        }
        tab[lin][col] = this.EMPTY;
      }
    }
    return [];
  }

  /**
  * Retorna se a peça X deve ser exibida para a coordena informada.
  *
  * @param number posX
  * @param number posY
  * @return boolean
  */
  showX(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.X;
  }

  /**
  * Retorna se a peça O deve ser exibida para a coordena informada.
  *
  * @param number posX
  * @param number posY
  * @return boolean
  */
  showO(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.O;
  }

  /**
  * Retorna se a marcação de vitória deve ser exibida para a coordena informada.
  *
  * @param number posX
  * @param number posY
  * @return boolean
  */
  showVictory(posX: number, posY: number): boolean {
    let showVictory: boolean = false;

    if (!this.victory) {
      return showVictory;
    }

    for (let pos of this.victory) {
      if (pos[0] === posX && pos[1] === posY) {
        showVictory = true;
        break;
      }
    }

    return showVictory;
  }

  /**
  * Inicializa um novo jogo, assim como exibe o tabuleiro.
  *
  * @return void
  */
  newGame(): void {
    this.initialize();
    this._showFinal = false;
    this._showStart = false;
    this._showBoard = true;
  }
}
