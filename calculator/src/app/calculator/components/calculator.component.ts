import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{
  constructor(private calculatorService: CalculatorService) {}

  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  ngOnInit(): void { // sempre o componente é criado o ngOnInit é chamado
    this.clear();
  }

  /**
  * Inicializa todos os operadores para os valores padrão.
  *
  * @return void
  */
  clear(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  /**
  * Adiciona o número selecionado para o cálculo posteriormente.
  *
  * @param string numero
  * @return void
  */
  addNumber(number: string): void {
  	if (this.operation === null) { // se a operação for vazia, significa que estamos digitando o primeiro número
  	  this.number1 = this.concatenateNumber(this.number1, number);
  	} else { // caso contrário, é o segundo
  	  this.number2 = this.concatenateNumber(this.number2, number);
  	}
  }

  /**
  * Returna o valor concatenado. Trata o separador decimal.
  *
  * @param string numAtual
  * @param string numConcat
  * @return string
  */
  concatenateNumber(numCurrent: string, numConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (numCurrent === '0' || numCurrent === null) {
      numCurrent = '';
    }

    // primeiro dígito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numCurrent === '') {
      return '0.';
    }

    // caso '.' digitado e já contenha um '.', apenas retorna
    if (numConcat === '.' && numCurrent.indexOf('.') > -1) {
      return numCurrent;
    }

    // por fim, se não cair em nenhum if, pega o número atual e concatena com o número digitado
    return numCurrent + numConcat;
  }

  /**
  * Executa lógica quando um operador for selecionado. Caso já possua uma operação selecionada, executa a operação anterior, e define a nova operação.
  *
  * @param string operacao
  * @return void
  */
  defineOperation(operation: string): void {
    // apenas define a operação caso não exista uma
  	if (this.operation === null) {
      this.operation = operation;
      return;
  	}

    /* caso operação definida e número 2 selecionado, efetua o cálculo da operação */
  	if (this.number2 !== null) {
  		this.result = this.calculatorService.calculate(
  			parseFloat(this.number1),
  			parseFloat(this.number2),
  			this.operation);
  		this.operation = operation;
  		this.number1 = this.result.toString();
  		this.number2 = null;
  		this.result = null;
  	}
  }

  /**
  * Efetua o cálculo de uma operação.
  *
  * @return void
  */
  calculate(): void {
  	if (this.number2 === null) {
  		return;
  	}

  	this.result = this.calculatorService.calculate(
  		parseFloat(this.number1),
  		parseFloat(this.number2),
  		this.operation);
  }

  /**
  * Retorna o valor a ser exibido na tela da calculadora.
  *
  * @return string
  */
  get display(): string {
  	if (this.result !== null) {
  		return this.result.toString();
  	}
  	if (this.number2 !== null) {
  		return this.number2;
  	}
  	return this.number1;
  }
}
