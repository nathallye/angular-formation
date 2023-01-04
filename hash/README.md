## PROJECT HASH

<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/86172286/210481447-925b89d1-c55c-4414-b72e-24ae42481c29.gif">
</div>

##

- We use the `ng new` command to create a new project in Angular. When executing this command, a new folder will be created containing a directory structure with the necessary files to start a project in this framework:

```
$ ng new hash
         [project-name]
```

- Run the application:

```
$ cd hash && ng serve

// or 

$ cd hash && npm start
```

### Important!

Angular in its latest version enables by default the **strict mode(strict)** and **noPropertyAccessFromIndexSignature** of Typescript, and this mode generates some incompatibilities with the code created here because it makes many restrictions on the creation of objects.

To avoid compilation errors due to restricted mode, it is recommended to disable it in the project.

To disable **strict** mode and **noPropertyAccessFromIndexSignature** in Angular, edit the `tsconfig.json` file, located at the root of the project, and change the following lines from:

``` JSON
"strict": true,
"noPropertyAccessFromIndexSignature": true
```

For:

``` JSON
"strict": false,
"noPropertyAccessFromIndexSignature": false
```

### Creating the Hash module

- The module is created using the following command:

```
$ ng g module hash

CREATE src/app/hash/hash.module.ts
```

### Creating the Hash component

- The component is created using the following command:

```
$ ng g component hash

CREATE src/app/hash/hash.component.css
CREATE src/app/hash/hash.component.html
CREATE src/app/hash/hash.component.spec.ts
CREATE src/app/hash/hash.component.ts 
UPDATE src/app/hash/hash.module.ts
```

### Creating the Hash service

- The service is created using the following command:

```
$ ng g service hash/shared/hash

CREATE src/app/hash/shared/hash.service.spec.ts 
CREATE src/app/hash/shared/hash.service.ts 
```

- In `hash.service.ts` we will define the methods of this service:

``` TS
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
```

#### Implementing the Hash interface

- Let's define the html with the css classes in `hash.component.html`:

``` HTML
<div>
  <h2>Jogo da velha</h2>

  <!-- tela inicial -->
  <div class="principal">
    <a href="#"
      class="botao">
      Iniciar
    </a>
  </div><!-- fim tela inicial -->

  <!-- tabuleiro -->
  <div>
    <ul>
      <li class="kz-border-bottom kz-border-right"></li>
      <li class="kz-border-bottom kz-border-right"></li>
      <li class="kz-border-bottom"></li>
      <li class="kz-border-bottom kz-border-right"></li>
      <li class="kz-border-bottom kz-border-right"></li>
      <li class="kz-border-bottom"></li>
      <li class="kz-border-right"></li>
      <li class="kz-border-right"></li>
      <li></li>
    </ul>
  </div><!-- fim tabuleiro -->

  <!-- tela final -->
  <div>
    <span>
      <p>Você venceu!!!</p>
      <p>Você perdeu...</p>
      <p>O jogo terminou empatado...</p>
      <br />
      <a href="#"
        class="botao">
        Jogar novamente
      </a>
    </span>
  </div><!-- fim tela final -->
</div>
```

- That done, let's define the CSS style in the `hash.component.css` file:

``` CSS
div {
  width: 400px;
  height: 400px;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
}

div.principal {
  margin-top: 100px;
}

a.botao {
  background-color: lightgreen;
  margin-top: 100px;
  font-size: 20px;
  padding: 15px;
}

a:link, a:visited {
  background-color: white;
  color: green;
  text-decoration: none;
  border: 4px solid green;
}

a:hover, a:active {
  background-color: lightgreen;

  color: green;
  border: 4px solid green;
}

ul li {
  list-style: none;
  width: 110px;
  height: 110px;
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  cursor: pointer;
}

.kz-border-bottom {
  border-bottom: 8px solid #333;
}

.kz-border-right {
  border-right: 8px solid #333;
}

.kz-img-x {
  background-image: url('/assets/img/x.png');
}

.kz-img-o {
  background-image: url('/assets/img/o.png');
}

.kz-cor-vitoria {
  background-color: lightgreen;
}
```

#### Implementing Hash inital screen

- First, in `hash.component.html`, let's import the hash service and inject it into the constructor. Next, let's create the methods:

``` TS
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
```

- Once that's done, let's go to `hash.component.html` and define the conditional rendering of the screens with `*ngIf` and add the `click` action on the start game button by calling the `startGame` method:

``` HTML
<div>
  <h2>Jogo da velha</h2>

  <!-- tela inicial -->
  <div class="principal" *ngIf="showStart"> <!-- Irá exibir a tela principal, caso o showStart seja true -->
    <a href="#"
      class="botao"
      (click)="startGame()"> <!-- Evento click quando acionado irá chamar o método startGame() definido no component -->
      Iniciar
    </a>
  </div><!-- fim tela inicial -->

  <!-- tabuleiro -->
  <div *ngIf="showBoard"> <!-- Irá exibir o tabuleiro, caso o showBoard seja true -->
    <ul>
      <li class="kz-border-bottom kz-border-right kz-img-x"></li>
      <li class="kz-border-bottom kz-border-right kz-img-o"></li>
      <li class="kz-border-bottom"></li>
      <li class="kz-border-bottom kz-border-right"></li>
      <li class="kz-border-bottom kz-border-right"></li>
      <li class="kz-border-bottom"></li>
      <li class="kz-border-right"></li>
      <li class="kz-border-right"></li>
      <li></li>
    </ul>
  </div><!-- fim tabuleiro -->

  <!-- tela final -->
  <div *ngIf="showFinal"> <!-- Irá exibir a tela final, caso o showFinal seja true -->
    <span>
      <p>Você venceu!!!</p>
      <p>Você perdeu...</p>
      <p>O jogo terminou empatado...</p>
      <br />
      <a href="#"
        class="botao">
        Jogar novamente
      </a>
    </span>
  </div><!-- fim tela final -->
</div>
```

#### Implementing Hash board screen

- Let's use the square brackets [] - assignment operators - to assign classes dynamically (two classes that contain the background with the images of X or O and another class that applies the victory color) and also the `click` event to call the `play()` method passing the positions in the `li` elements of the list:

``` HTML
<div>
  <h2>Jogo da velha</h2>

  <!-- tela inicial -->
  <div class="principal" *ngIf="showStart"> <!-- Irá exibir a tela principal, caso o showStart seja true -->
    <a href="#"
      class="botao"
      (click)="startGame()"> <!-- Evento click quando acionado irá chamar o método startGame() definido no component -->
      Iniciar
    </a>
  </div><!-- fim tela inicial -->

  <!-- tabuleiro -->
  <div *ngIf="showBoard"> <!-- Irá exibir o tabuleiro, caso o showBoard seja true -->
    <ul>
      <li class="kz-border-bottom kz-border-right"
        [class.kz-img-x]="showX(0, 0)"
        [class.kz-img-o]="showO(0, 0)"
        [class.kz-cor-vitoria]="showVictory(0, 0)"
        (click)="play(0, 0)">
      </li>
      <li class="kz-border-bottom kz-border-right"
        [class.kz-img-x]="showX(0, 1)"
        [class.kz-img-o]="showO(0, 1)"
        [class.kz-cor-vitoria]="showVictory(0, 1)"
        (click)="play(0, 1)">
      </li>
      <li class="kz-border-bottom"
        [class.kz-img-x]="showX(0, 2)"
        [class.kz-img-o]="showO(0, 2)"
        [class.kz-cor-vitoria]="showVictory(0, 2)"
        (click)="play(0, 2)">
      </li>
      <li class="kz-border-bottom kz-border-right"
        [class.kz-img-x]="showX(1, 0)"
        [class.kz-img-o]="showO(1, 0)"
        [class.kz-cor-vitoria]="showVictory(1, 0)"
        (click)="play(1, 0)">
      </li>
      <li class="kz-border-bottom kz-border-right"
        [class.kz-img-x]="showX(1, 1)"
        [class.kz-img-o]="showO(1, 1)"
        [class.kz-cor-vitoria]="showVictory(1, 1)"
        (click)="play(1, 1)">
      </li>
      <li class="kz-border-bottom"
        [class.kz-img-x]="showX(1, 2)"
        [class.kz-img-o]="showO(1, 2)"
        [class.kz-cor-vitoria]="showVictory(1, 2)"
        (click)="play(1, 2)">
      </li>
      <li class="kz-border-right"
        [class.kz-img-x]="showX(2, 0)"
        [class.kz-img-o]="showO(2, 0)"
        [class.kz-cor-vitoria]="showVictory(2, 0)"
        (click)="play(2, 0)">
      </li>
      <li class="kz-border-right"
        [class.kz-img-x]="showX(2, 1)"
        [class.kz-img-o]="showO(2, 1)"
        [class.kz-cor-vitoria]="showVictory(2, 1)"
        (click)="play(2, 1)">
      </li>
      <li
        [class.kz-img-x]="showX(2, 2)"
        [class.kz-img-o]="showO(2, 2)"
        [class.kz-cor-vitoria]="showVictory(2, 2)"
        (click)="play(2, 2)">
      </li>
    </ul>
  </div><!-- fim tabuleiro -->

  <!-- tela final -->
  <div *ngIf="showFinal"> <!-- Irá exibir a tela final, caso o showFinal seja true -->
    <span>
      <p>Você venceu!!!</p>
      <p>Você perdeu...</p>
      <p>O jogo terminou empatado...</p>
      <br />
      <a href="#"
        class="botao">
        Jogar novamente
      </a>
    </span>
  </div><!-- fim tela final -->
</div>
```

#### Implementing Hash final screen

- Let's use angular's `*ngIf` directive to check which player won and display the correct message and add the `click` action on the `a` element (new game) by calling the ``newGame()` method:

``` HTML
<div>
  <h2>Jogo da velha</h2>

  <!-- tela inicial -->
  <div class="principal" *ngIf="showStart"> <!-- Irá exibir a tela principal, caso o showStart seja true -->
    <a href="#"
      class="botao"
      (click)="startGame()"> <!-- Evento click quando acionado irá chamar o método startGame() definido no component -->
      Iniciar
    </a>
  </div><!-- fim tela inicial -->

  <!-- tabuleiro -->
  <div *ngIf="showBoard"> <!-- Irá exibir o tabuleiro, caso o showBoard seja true -->
    <ul>
      <li class="kz-border-bottom kz-border-right"
        [class.kz-img-x]="showX(0, 0)"
        [class.kz-img-o]="showO(0, 0)"
        [class.kz-cor-vitoria]="showVictory(0, 0)"
        (click)="play(0, 0)">
      </li>
      <li class="kz-border-bottom kz-border-right"
        [class.kz-img-x]="showX(0, 1)"
        [class.kz-img-o]="showO(0, 1)"
        [class.kz-cor-vitoria]="showVictory(0, 1)"
        (click)="play(0, 1)">
      </li>
      <li class="kz-border-bottom"
        [class.kz-img-x]="showX(0, 2)"
        [class.kz-img-o]="showO(0, 2)"
        [class.kz-cor-vitoria]="showVictory(0, 2)"
        (click)="play(0, 2)">
      </li>
      <li class="kz-border-bottom kz-border-right"
        [class.kz-img-x]="showX(1, 0)"
        [class.kz-img-o]="showO(1, 0)"
        [class.kz-cor-vitoria]="showVictory(1, 0)"
        (click)="play(1, 0)">
      </li>
      <li class="kz-border-bottom kz-border-right"
        [class.kz-img-x]="showX(1, 1)"
        [class.kz-img-o]="showO(1, 1)"
        [class.kz-cor-vitoria]="showVictory(1, 1)"
        (click)="play(1, 1)">
      </li>
      <li class="kz-border-bottom"
        [class.kz-img-x]="showX(1, 2)"
        [class.kz-img-o]="showO(1, 2)"
        [class.kz-cor-vitoria]="showVictory(1, 2)"
        (click)="play(1, 2)">
      </li>
      <li class="kz-border-right"
        [class.kz-img-x]="showX(2, 0)"
        [class.kz-img-o]="showO(2, 0)"
        [class.kz-cor-vitoria]="showVictory(2, 0)"
        (click)="play(2, 0)">
      </li>
      <li class="kz-border-right"
        [class.kz-img-x]="showX(2, 1)"
        [class.kz-img-o]="showO(2, 1)"
        [class.kz-cor-vitoria]="showVictory(2, 1)"
        (click)="play(2, 1)">
      </li>
      <li
        [class.kz-img-x]="showX(2, 2)"
        [class.kz-img-o]="showO(2, 2)"
        [class.kz-cor-vitoria]="showVictory(2, 2)"
        (click)="play(2, 2)">
      </li>
    </ul>
  </div><!-- fim tabuleiro -->

  <!-- tela final -->
  <div *ngIf="showFinal"> <!-- Irá exibir a tela final, caso o showFinal seja true -->
    <span>
      <p *ngIf="player===2">Você venceu!!!</p>
      <p *ngIf="player===1">Você perdeu...</p>
      <p *ngIf="player===0">O jogo terminou empatado...</p>
      <br />
      <a href="#"
        class="botao"
        (click)="newGame()">
        Jogar novamente
      </a>
    </span>
  </div><!-- fim tela final -->
</div>
```
