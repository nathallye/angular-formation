## PROJECT DASHBOARD

- We use the `ng new` command to create a new project in Angular. When executing this command, a new folder will be created containing a directory structure with the necessary files to start a project in this framework:

```
$ ng new dashboard
         [project-name]
```

- Run the application:

```
$ cd dashboard && ng serve

// or 

$ cd dashboard && npm start
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

### Creating the Dashboard module

- The module is created using the following command:

```
$ ng g module dashboard

CREATE src/app/dashboard/dashboard.module.ts
```

### Creating the Dashboard component

- The component is created using the following command:

```
$ ng g component dashboard

CREATE src/app/dashboard/dashboard.component.css
CREATE src/app/dashboard/dashboard.component.html
CREATE src/app/dashboard/dashboard.component.spec.ts
CREATE src/app/dashboard/dashboard.component.ts 
UPDATE src/app/dashboard/dashboard.module.ts
```

### Creating the Dashboard(Data) service

- The service is created using the following command:

```
$ ng g service dashboard/data

CREATE src/app/dashboard/data.service.spec.ts 
CREATE src/app/dashboard/data.service.ts 
```

- In `data.service.ts` we will define the methods of this service:

``` TS
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
```

### Importing the Charts API

- In `index.html` let's import the script:

``` HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Dashboard</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

#### Implementing the Dashboard interface

- Let's define the html with the css classes in `dashboard.component.html`:

``` HTML
<div id="pie_chart"></div>
<div id="3d_pie_chart"></div>
<div id="donut_chart"></div>
<div id="bar_chart"></div>
<div id="line_chart"></div>
<div id="column_chart"></div>
```

- That done, let's define the CSS style in the `dashboard.component.css` file:

``` CSS
div {
	float: left;
}
```

#### Implementing the charts the Dashboard

- First, in `dashboard.component.ts` vamos definir the methods:

``` TS
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';

declare var google: any; // declaração para o TS entender essa variável global da biblioteca externa

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  private data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	this.dataService.getData().subscribe(
  		data => {
  			this.data = data;
  			this.init();
  		});
  }

  /**
  * Inicializa a API de gráficos com delay de 1 segundo, o que permite a integração da API com o Angular.
  *
  * @return void
  */
  init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
      	google.charts.setOnLoadCallback(this.displayCharts());
      }, 1000);
    }
  }

  /**
  * Método chamado assim que a API de gráficos é inicializada. Reponsável por chamar os métodos geradores dos gráficos.
  *
  * @return void
  */
  displayCharts(): void {
  	this.displayPieChart();
  	this.display3dPieChart();
  	this.displayBarChart();
  	this.displayLineChart();
  	this.displayColumnChart();
  	this.displayDonutChart();
  }

  /**
  * Exibe o gráfico Pie Chart.
  *
  * @return void
  */
  displayPieChart(): void {
  	const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.getOptions());
  }

  /**
  * Exibe o gráfico Pie Chart em 3D.
  *
  * @return void
  */
  display3dPieChart(): void {
  	const el = document.getElementById('3d_pie_chart');
  	const chart = new google.visualization.PieChart(el);
	  const options = this.getOptions();

    options['is3D'] = true;
    chart.draw(this.obterDataTable(), options);
  }

  /**
  * Exibe o gráfico Donut Chart.
  *
  * @return void
  */
  displayDonutChart(): void {
  	const el = document.getElementById('donut_chart');
  	const chart = new google.visualization.PieChart(el);
    const options = this.getOptions();

    options['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), options);
  }

  /**
  * Exibe o gráfico Bar Chart.
  *
  * @return void
  */
  displayBarChart(): void {
  	const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obterDataTable(), this.getOptions());
  }

  /**
  * Exibe o gráfico Line Chart.
  *
  * @return void
  */
  displayLineChart(): void {
  	const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obterDataTable(), this.getOptions());
  }

  /**
  * Exibe o gráfico Column Chart.
  *
  * @return void
  */
  displayColumnChart(): void {
  	const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.obterDataTable(), this.getOptions());
  }

  /**
  * Cria e retorna o objeto DataTable da API de gráficos, responsável por definir os dados do gráfico.
  *
  * @return any
  */
  obterDataTable(): any {
  	const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.data);

    return data;
  }

  /**
  * Retorna as opções do gráfico, que incluem o título e tamanho do gráfico.
  *
  * @return any
  */
  getOptions(): any {
  	return {
    	'title': 'Quantidade de cadastros primeiro semestre',
        'width': 400,
        'height': 300
    };
  }
}
```
