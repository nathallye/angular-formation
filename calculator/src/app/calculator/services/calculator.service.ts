/**
* Serviço responsável por executar as operações da
* calculadora.
*
* @author Nathallye Bacelar<nathallye.bacelar@gmail.com>
* @since 1.0.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {

  /* Definindo as constantes utilizadas para identificar as operações de cálculo */
  /* O static faz com que seja possível chamarmos o atributo sem criamos uma nova instância, assim: CalculatorService.SUM */
  static readonly SUM: string = '+';
  static readonly SUBTRATION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';

  constructor() { }

  /**
  * Método que calcula uma operação matemática dado dois números. Suporta as operações soma, subtração, divisão, e multiplicação.
  *
  * @param num1 number
  * @param num2 number
  * @param operation string Operação a ser executada
  * @return number Resultado da operação
  */
  calculate(num1: number, num2: number, operation: string): number {

    let result: number; // armazena o resultado da operação

  	switch(operation) {
  	  case CalculatorService.SUM:
  	    result = num1 + num2;
  		break;
  	  case CalculatorService.SUBTRATION:
  	    result = num1 - num2;
  		break;
  	  case CalculatorService.DIVISION:
  	    result = num1 / num2;
  		break;
  	  case CalculatorService.MULTIPLICATION:
  	    result = num1 * num2;
  		break;
  	  default:
  	    result = 0;
  	}

  	return result;
  }
}
