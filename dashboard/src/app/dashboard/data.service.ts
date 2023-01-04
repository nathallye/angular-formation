import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  readonly data = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ]

  constructor() { }

  /**
	* Retorna um observable contendo os dados a serem exibidos no gráfico.
	*
	* @return Observable<any>
	*/
	getData(): Observable<any> {
		return new Observable(observable => { // criamos a instância do Observable e usamos a referência(observable) que ele disponibiliza para manipulação
			observable.next(this.data); // e o next já notifica todos os inscritos que estão na escuta(retornando os dados)
			observable.complete(); // finaliza a execução e notifica os inscritos que finalizou e que não há mais a necessidade de ficar na escuta
		});
	}
}
