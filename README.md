# Angular Formation

## Installation

- Installing Angular:

```
$ npm i -g @angular/cli
```

- Checking installed version:

```
$ ng version
```

## FIRST PROJECT: HELLO WORLD!

- We use the `ng new` command to create a new project in Angular. When executing this command, a new folder will be created containing a directory structure with the necessary files to start a project in this framework:

```
$ ng new hello-world
         [project-name]
```

- Run the application:

```
$ cd hello-world && ng serve

// or 

$ cd hello-world && npm start
```

## PROJECT CALCULATOR

<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/86172286/210288939-4be8dc68-075b-4767-acbb-8894b96122d3.gif">
</div>
															     
##

- We use the `ng new` command to create a new project in Angular. When executing this command, a new folder will be created containing a directory structure with the necessary files to start a project in this framework:

```
$ ng new calculator
         [project-name]
```

- Run the application:

```
$ cd calculator && ng serve

// or 

$ cd calculator && npm start
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

### Installing bootstrap

- Bootstrap installation can be done with the following command:

```
npm install --save bootstrap@3
```

- And the Bootstrap CSS file should be added with the following structure to the `angular.json` file:

``` JSON
"styles": [
  "src/styles.css",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
```

### Creating the Calculator module

- The module is created using the following command:

```
$ ng g module calculator

CREATE src/app/calculator/calculator.module.ts
```

### Creating the Calculator component

- The component is created using the following command:

```
$ ng g component calculator/calculator

CREATE src/app/calculator/calculator/calculator.component.css
CREATE src/app/calculator/calculator/calculator.component.html
CREATE src/app/calculator/calculator/calculator.component.spec.ts
CREATE src/app/calculator/calculator/calculator.component.ts 
UPDATE src/app/calculator/calculator.module.ts 
```

### Creating the Calculator service

- The service is created using the following command:

```
$ ng g service calculator/services/calculator

CREATE src/app/calculator/services/calculator.service.spec.ts 
CREATE src/app/calculator/services/calculator.service.ts 
```

#### Elements of an Angular application

- Modules
- Components
- Templates
- Metadata
- Data binding
- Directives
- Services
- Dependency injection
															     
<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/86172286/207194739-3cfaf949-21ea-4c6f-b372-38aaa63cfd1c.png">
</div>																     

- **Components:** An Angular application is based on components. With them, we can encapsulate interface behaviors and rules, which makes creating applications much simpler. Also, a component can encapsulate other components.

A component is made up of 3 items:

  - HTML template
  - Css
  - A class that manages properties and behaviors

<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/86172286/207196452-2b481d99-213f-466c-b42a-131f55f7697f.png">
</div>	

- **Services:** Services are created to concentrate all the application's business rules. Each service can be used by more than one component.

They are not restricted to that, but what usually happens is that we use services to encapsulate the code responsible for rules with a specific purpose, such as retrieving or submitting data in a RESTful API (backend).

<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/86172286/207196640-e82183ae-103a-4978-8c33-5991e9512f90.png">
</div>

With this, we can leave the components focused on managing parts of the screen that the user will see and the services focused on code with another specific purpose.

- **Dependency injection:** Dependency injection is a design pattern that can be applied regardless of language.

This pattern lets you make component classes cleaner and more efficient by delegating complex tasks and business rules to services.

Going deeper, dependency injection is the process of providing the necessary instances that a given class needs to be instantiated and used.

The big advantage is that we have less coupling between our classes.

Angular implements a dependency injection mechanism and runs it at application startup.

- **Modules:** Another important element is the modules. They help to make our application more organized. 

It is possible to create modules that group components, services and other elements by some similarity.

## PROJECT TODO LIST
						       
<div align="center">
  <img width="800" src="https://user-images.githubusercontent.com/86172286/210289458-2bdfdb31-d9eb-4172-8364-57a5acaf61aa.gif">
</div>	
															     
##

- We use the `ng new` command to create a new project in Angular. When executing this command, a new folder will be created containing a directory structure with the necessary files to start a project in this framework:

```
$ ng new todo-list
         [project-name]
```

- Run the application:

```
$ cd todo-list && ng serve

// or 

$ cd todo-list && npm start
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

### Installing bootstrap

- Bootstrap installation can be done with the following command:

```
npm install --save bootstrap@3
```

- And the Bootstrap CSS file should be added with the following structure to the `angular.json` file:

``` JSON
"styles": [
  "src/styles.css",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
```

- Another option is to import the bootstrap directly into the `index.html` file:

``` HTML
<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Gerenciador de Tarefas</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

### Creating the Tasks module

- The module is created using the following command:

```
$ ng g module tasks

CREATE src/app/tasks/tasks.module.ts
```

### Creating the Task model

- In the `src/app/tasks` directory, we will create a shared folder called "shared" and inside it a `task.model.ts` file to define a task model.

- In this `task.model.ts` file we will define the attributes that the task will have:

``` TS
export class Task {
  constructor(
    public id?: number,
    public name?: string,
    public completed?: boolean
  ) {}
}
```

### Creating the List Tasks component

- The component is created using the following command:

```
$ ng g component tasks/list-tasks

CREATE src/app/tasks/list-tasks/list-tasks.component.css
CREATE src/app/tasks/list-tasks/list-tasks.component.html
CREATE src/app/tasks/list-tasks/list-tasks.component.spec.ts
CREATE src/app/tasks/list-tasks/list-tasks.component.ts 
UPDATE src/app/tasks/list-tasks.module.ts 
```

### Creating the Task service

- The service is created using the following command:

```
$ ng g service tasks/shared/task

CREATE src/app/tasks/shared/task.service.spec.ts 
CREATE src/app/tasks/shared/task.service.ts 
```

- In `task.service.ts` we will define the methods of this service:

``` TS
import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor() { }

  getAll(): Task[] {
  	const tasks = localStorage['tarefas']; // 'tasks' - chave que irá representar as tarefas no local storage

    return tasks ? JSON.parse(tasks) : [];
  }

  getOne(id: number): Task {
    const tasks: Task[] = this.getAll();

    return tasks.find(task => task.id === id);
  }

  create(task: Task): void {
  	const tasks = this.getAll();

    task.id = new Date().getTime();
  	tasks.push(task);

    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  update(task: Task): void {
    const tasks: Task[] = this.getAll();

    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });

    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  delete(id: number): void {
    let tasks: Task[] = this.getAll();

    tasks = tasks.filter(task => task.id !== id);

    localStorage['tarefas'] = JSON.stringify(tasks);
  }

  updateStatus(id: number): void {
    const tasks: Task[] = this.getAll();

    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].completed = !obj.completed;
      }
    });

    localStorage['tarefas'] = JSON.stringify(tasks);
  }
}
```

#### Registering task listing routes

- In the `src/app/tasks` directory we will create the `tasks-routing.module.ts` file and in it we will define the routes related to the tasks:

``` TS
import { Routes } from '@angular/router';

import { ListTasksComponent } from './list-tasks';

export const TasksRoutes: Routes = [
	{ path: 'tarefas', redirectTo: 'tarefas/listar' },

	{ path: 'tarefas/listar', component: ListTasksComponent }
];
```

- Next, let's import it into the app's main `app-routing.module.ts` routing module:

``` JS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksRoutes } from './tasks';

const routes: Routes = [
  { path: '', redirectTo: 'tarefas/listar', pathMatch: 'full' },
  ...TasksRoutes
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### Implementing the Task List

- First, let's define the html with the bootstrap classes in `list-tasks.component.html`:

``` HTML
<h1>Tarefas</h1>

<table class="table table-striped table-bordered table-hover">
  <tbody>
    <tr>
    	<th>Tarefa</th>
      <th>Concluída</th>
    	<th class="text-center">
        <a
           class="btn btn-xs btn-success">
           <span class="glyphicon glyphicon-plus"
             aria-hidden="true"></span> Novo
        </a>
      </th>
    </tr>
    
    <tr>
      <td>

      </td>
      <td style="width: 70px" class="text-center">
        <input
          type="checkbox">
      </td>
      <td class="text-center" style="width: 200px">
        <a
          title="Editar" alt="Editar"
          class="btn btn-xs btn-info">
          <span class="glyphicon glyphicon-pencil"
            aria-hidden="true"></span> Editar
        </a>
        <a href="#" title="Remover" alt="Remover"

          class="btn btn-xs btn-danger">
          <span class="glyphicon glyphicon-remove"
            aria-hidden="true"></span> Remover
        </a>
      </td>
    </tr>
  </tbody>
</table>

<p>Nenhuma tarefa cadastrada.</p>
```

- Next, we'll import the necessary modules (RouterModule and FormsModule) into `tasks.module.ts`:

``` TS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared';
import { ListTasksComponent } from './list-tasks';

@NgModule({
  declarations: [
    ListTasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})

export class TasksModule { }
```

- Once this is done, in `list-tasks.component.ts` we can define the methods that will list the tasks:

``` TS
import { Component, OnInit } from '@angular/core';

import { Task, TaskService } from './../shared';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})

export class ListTasksComponent implements OnInit {

  tasks: Task[]

  constructor(private taskService: TaskService) {}

  ngOnInit() { // chamado no angular logo após a inicialização do construtor
    this.tasks = this.getAll();
  }

  getAll(): Task[] {
    return this.taskService.getAll();
  }
}
```

- Now, let's make a change to `list-tasks.component.html` by adding the `*ngFor` and `ngIf` directives to the list of tasks:

``` HTML
<h1>Tarefas</h1>

<table class="table table-striped table-bordered table-hover">
  <tbody>
    <tr>
    	<th>Tarefa</th>
      <th>Concluída</th>
    	<th class="text-center">
        <a
           class="btn btn-xs btn-success">
           <span class="glyphicon glyphicon-plus"
             aria-hidden="true"></span> Novo
        </a>
      </th>
    </tr>

    <tr *ngFor="let task of tasks"> <!-- *ngFor - Diretiva do angular que está dentro do pacote FormsModule - essa diretiva irá percorrer cada elemento de uma lista -->
      <td [class.success]="!task.completed"> <!-- colchetes [] - operador de atribuição do angular, nesse caso, se a tarefa NÃO(!) estiver concluida ele vai atribuir a class success do bootstrap a esse elemento, deixando o fundo verde -->
        {{ task.name }} <!-- chaves duplas {} - exibe os valores de dentro das variáveis -->
      </td>
      <td style="width: 70px" class="text-center">
        <input
          type="checkbox"
          [value]="task.id"
          [checked]="task.completed">
          <!-- 
            colchetes [] - operador de atribuição do angular;
            [value]="task.id" - nesse caso ele só está atribuindo o id da tarefa ao atributo value do input do tipo checkbox;
            [checked]="task.completed" - nesse caso ele irá marcar o checkbox com o "check" se a tarefa estiver completa, ou seja, completed for true;
          -->
      </td>
      <td class="text-center" style="width: 200px">
        <a
          title="Editar" alt="Editar"
          class="btn btn-xs btn-info">
          <span class="glyphicon glyphicon-pencil"
            aria-hidden="true"></span> Editar
        </a>
        <a href="#" title="Remover" alt="Remover"

          class="btn btn-xs btn-danger">
          <span class="glyphicon glyphicon-remove"
            aria-hidden="true"></span> Remover
        </a>
      </td>
    </tr>
  </tbody>
</table>

<p *ngIf="tasks.length==0">Nenhuma tarefa cadastrada.</p> <!-- *ngIf - Diretiva do angular - essa diretiva só irá exibir o texto se o tamanho da lista for igual a 0 -->
```

### Creating the Register Task component

- The component is created using the following command:

```
$ ng g component tasks/register-task

CREATE src/app/tasks/register-task/register-task.component.css
CREATE src/app/tasks/register-task/register-task.component.html
CREATE src/app/tasks/register-task/register-task.component.spec.ts
CREATE src/app/tasks/register-task/register-task.component.ts 
UPDATE src/app/tasks/register-task.module.ts 
```

#### Registering task registration routes

- In `tasks-routing.module.ts` let's add the following route:

``` TS
import { Routes } from '@angular/router';

import { ListTasksComponent } from './list-tasks';
import { RegisterTaskComponent } from './register-task';

export const TasksRoutes: Routes = [
	{ path: 'tarefas', redirectTo: 'tarefas/listar' },

	{ path: 'tarefas/listar', component: ListTasksComponent },

  { path: 'tarefas/cadastrar', component: RegisterTaskComponent }
];
```

#### Adding action to create new task button

- Now, let's make a change to the `list-tasks.component.html` file by adding a route redirect with the `routerLink` in the `a` element:

``` HTML
<h1>Tarefas</h1>

<table class="table table-striped table-bordered table-hover">
  <tbody>
    <tr>
    	<th>Tarefa</th>
      <th>Concluída</th>
    	<th class="text-center">
        <a [routerLink]="['/tarefas/cadastrar']"
           class="btn btn-xs btn-success">
           <span class="glyphicon glyphicon-plus"
             aria-hidden="true"></span> Novo
        </a>
      </th>
    </tr>
    <!--[...]-->
  </tbody>
</table>

<p *ngIf="tasks.length==0">Nenhuma tarefa cadastrada.</p>
```

#### Implementing the Register Task

- First, let's define the html with the bootstrap classes in `register-task.component.html`:

``` HTML
<h1>Cadastrar tarefa</h1>

<div class="well">
  <form>
    <div class="form-group">
      <label for="name">Tarefa:</label>
      <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        minlength="5"
        required>
      <div class="alert alert-danger">
        <div>
          Digite a tarefa.
        </div>
        <div>
          A tarefa deve conter ao menos 5 caracteres.
        </div>
      </div>
    </div>
    <div class="form-group text-center">
      <input
        type="submit"
        class="btn btn-success"
        value="Cadastrar">
      <a
        class="btn btn-default">
        <span class="glyphicon glyphicon-chevron-left"
          aria-hidden="true"></span> Voltar
      </a>
    </div>
  </form>
</div>
```

- Once this is done, in `register-task.component.ts` we can define the methods that will register the task:

``` TS
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Task, TaskService } from './../shared';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})

export class RegisterTaskComponent implements OnInit {
  @ViewChild('formTask', { static: true }) formTask: NgForm; // ViewChild - permite termos uma referência do formulário html dentro do componente
  task: Task;

  constructor(
    private taskService: TaskService, 
    private router: Router
  ) { }

  ngOnInit() {
  	this.task = new Task(0, "", false);
  }

  create(): void {
    if (this.formTask.form.valid) { // verifica se o formTask possui algum erro de validação, não possuir, é valido(valid) então chama o método de criar
  	  this.taskService.create(this.task);
  	  this.router.navigate(["/tarefas"]);
    }
  }
}
```

- Now, let's make a change to `list-tasks.component.html` by adding the Angular directives to the task register:

``` HTML
<h1>Cadastrar tarefa</h1>

<div class="well">
  <form #formTask="ngForm"> <!-- Vinculando o componente ao form -->
    <div class="form-group">
      <label for="name">Tarefa:</label>
      <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        [(ngModel)]="task.name"
        #name="ngModel"
        minlength="5"
        required> <!--
          [(ngModel)]="task.name" - vai garantir tanto no form quanto no componente que os valores sejam os mesmos;
          #name="ngModel" - variável local para representar esse campo de texto(input);
        -->
      <div *ngIf="name.errors && (name.dirty || name.touched)"
        class="alert alert-danger"> <!-- Se possuir erros, irá exibi-los -->
        <div [hidden]="!name.errors.required"> <!-- se o input name NÃO(!) possuir errors do tipo required irá esconder a mensagem -->
          Digite a tarefa.
        </div>
        <div [hidden]="!name.errors.minlength"> <!-- Se o input name NÃO(!) possuir errors do tipo minlength irá esconder a mensagem -->
          A tarefa deve conter ao menos 5 caracteres.
        </div>
      </div>
    </div>
    <div class="form-group text-center">
      <input
        type="submit"
        class="btn btn-success"
        (click)="create()"
        value="Cadastrar"
        [disabled]="!formTask.form.valid"> <!--
          (click)="create()" - operador de eventos, quando o botão for clicado o evento click erá chamado e irá acionar o método create();
          [disabled]="!formTask.form.valid" - Enquanto o formulário possuir erros de validação(!formTask.form.valid), vai ficar desabilitado o botão Cadastrar;
        -->
      <a [routerLink]="['/tarefas/listar']"
        class="btn btn-default">
        <span class="glyphicon glyphicon-chevron-left"
          aria-hidden="true"></span> Voltar
      </a>
    </div>
  </form>
</div>
```

### Creating the Edit Task component

- The component is created using the following command:

```
$ ng g component tasks/edit-task

CREATE src/app/tasks/edit-task/edit-task.component.css
CREATE src/app/tasks/edit-task/edit-task.component.html
CREATE src/app/tasks/edit-task/edit-task.component.spec.ts
CREATE src/app/tasks/edit-task/edit-task.component.ts 
UPDATE src/app/tasks/edit-task.module.ts 
```

#### Registering task edition routes

- In `tasks-routing.module.ts` let's add the following route:

``` TS
import { Routes } from '@angular/router';

import { ListTasksComponent } from './list-tasks';
import { RegisterTaskComponent } from './register-task';
import { EditTaskComponent } from './edit-task';

export const TasksRoutes: Routes = [
	{ path: 'tarefas', redirectTo: 'tarefas/listar' },

	{ path: 'tarefas/listar', component: ListTasksComponent },

  { path: 'tarefas/cadastrar', component: RegisterTaskComponent },

  { path: 'tarefas/editar/:id', component: EditTaskComponent }
];
```

#### Adding action to edit task button

- Now, let's make a change to the `list-tasks.component.html` file by adding a route redirect with the `routerLink` in the `a` element:

``` HTML
<h1>Tarefas</h1>

<table class="table table-striped table-bordered table-hover">
  <tbody>
    <tr>
    	<th>Tarefa</th>
      <th>Concluída</th>
    	<th class="text-center">
        <!--[...]-->
      </th>
    </tr>

    <tr *ngFor="let task of tasks"> 
      <td [class.success]="!task.completed"> 
        {{ task.name }} 
      </td>
      <td style="width: 70px" class="text-center">
        <input
          type="checkbox"
          [value]="task.id"
          [checked]="task.completed">
      </td>
      <td class="text-center" style="width: 200px">
        <a [routerLink]="['/tarefas/editar', task.id]"
          title="Editar" alt="Editar"
          class="btn btn-xs btn-info">
          <span class="glyphicon glyphicon-pencil"
            aria-hidden="true"></span> Editar
        </a>
        <a href="#" title="Remover" alt="Remover"
          class="btn btn-xs btn-danger">
          <span class="glyphicon glyphicon-remove"
            aria-hidden="true"></span> Remover
        </a>
      </td>
    </tr>
  </tbody>
</table>

<p *ngIf="tasks.length==0">Nenhuma tarefa cadastrada.</p> 
```

#### Implementing the Edit Task

- First, let's define the html with the bootstrap classes in `edit-task.component.html`:

``` HTML
<h1>Editar tarefa</h1>

<div class="well">
  <form>
    <div class="form-group">
      <label for="name">Tarefa:</label>
      <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        minlength="5"
        required>
      <div class="alert alert-danger">
        <div>
          Digite a tarefa.
        </div>
        <div>
          A tarefa deve conter ao menos 5 caracteres.
        </div>
      </div>
    </div>
    <div class="form-group text-center">
      <input
        type="submit"
        class="btn btn-success"
        value="Atualizar">
      <a
        class="btn btn-default">
        <span class="glyphicon glyphicon-chevron-left"
          aria-hidden="true"></span> Voltar
      </a>
    </div>
  </form>
</div>
```

- Once this is done, in `edit-task.component.ts` we can define the methods that will register the task:

``` TS
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Task, TaskService} from './../shared';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {

  @ViewChild('formTask', { static: true }) formTask: NgForm; // ViewChild - permite termos uma referência do formulário html dentro do componente
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  	let id = +this.route.snapshot.params['id'];
	  this.task = this.taskService.getOne(id);
  }

  update(): void {
    if (this.formTask.form.valid) {
	    this.taskService.update(this.task);
	    this.router.navigate(['/tarefas']);
    }
  }
}
```

- Now, let's make a change to `edit-task.component.html` by adding the Angular directives to the task edit:

``` HTML
<h1>Editar tarefa</h1>

<div class="well">
  <form #formTask="ngForm"> <!-- Vinculando o componente ao form -->
    <div class="form-group">
      <label for="name">Tarefa:</label>
      <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        [(ngModel)]="task.name"
        #name="ngModel"
        minlength="5"
        required> <!--
          [(ngModel)]="task.name" - vai garantir tanto no form quanto no componente que os valores sejam os mesmos;
          #name="ngModel" - variável local para representar esse campo de texto(input);
        -->
      <div *ngIf="name.errors && (name.dirty || name.touched)"
        class="alert alert-danger"> <!-- Se possuir erros, irá exibi-los -->
        <div [hidden]="!name.errors.required"> <!-- se o input name NÃO(!) possuir errors do tipo required irá esconder a mensagem -->
          Digite a tarefa.
        </div>
        <div [hidden]="!name.errors.minlength"> <!-- Se o input name NÃO(!) possuir errors do tipo minlength irá esconder a mensagem -->
          A tarefa deve conter ao menos 5 caracteres.
        </div>
      </div>
    </div>
    <div class="form-group text-center">
      <input
        type="submit"
        class="btn btn-success"
        (click)="update()"
        value="Atualizar"
        [disabled]="!formTask.form.valid"> <!--
          (click)="update()" - operador de eventos, quando o botão for clicado o evento click será chamado e irá acionar o método update();
          [disabled]="!formTask.form.valid" - Enquanto o formulário possuir erros de validação(!formTask.form.valid), vai ficar desabilitado o botão Cadastrar;
        -->
      <a [routerLink]="['/tarefas/listar']"
        class="btn btn-default">
        <span class="glyphicon glyphicon-chevron-left"
          aria-hidden="true"></span> Voltar
      </a>
    </div>
  </form>
</div>
```

### Remove Task

#### Implementing the Remove Task

- First, let's create the update method in the `list-tasks.component.ts` file (since remove has no component of its own):

``` TS
import { Component, OnInit } from '@angular/core';

import { Task, TaskService } from './../shared';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})

export class ListTasksComponent implements OnInit {

  tasks: Task[]

  constructor(private taskService: TaskService) {}

  ngOnInit() { // chamado no angular logo após a inicialização do construtor
    this.tasks = this.getAll();
  }

  getAll(): Task[] {
    return this.taskService.getAll();
  }

  delete($event: any, task: Task): void { // $event - para evitar a atualização da página após a ação
    $event.preventDefault(); // $event.preventDefault() - desabilita a atualização da página
    if (confirm('Deseja remover a tarefa "' + task.name + '"?')) {
      this.taskService.delete(task.id);
      this.tasks = this.taskService.getAll();
    }
  }
}
```

- Now, let's make a change in the `list-tasks.component.html` file by adding the `click` event to call the `delete` method on the `a` element:

``` HTML
<h1>Tarefas</h1>

<table class="table table-striped table-bordered table-hover">
  <tbody>
    <tr>
    	<th>Tarefa</th>
      <th>Concluída</th>
    	<th class="text-center">
        <!--[...]-->
      </th>
    </tr>

    <tr *ngFor="let task of tasks"> 
      <!--[...]-->

      <td class="text-center" style="width: 200px">
        <a [routerLink]="['/tarefas/editar', task.id]"
          title="Editar" alt="Editar"
          class="btn btn-xs btn-info">
          <span class="glyphicon glyphicon-pencil"
            aria-hidden="true"></span> Editar
        </a>
        <a href="#" title="Remover" alt="Remover"
          class="btn btn-xs btn-danger"
          (click)="delete($event, task)">
          <span class="glyphicon glyphicon-remove"
            aria-hidden="true"></span> Remover
        </a>
      </td>
    </tr>
  </tbody>
</table>

<p *ngIf="tasks.length==0">Nenhuma tarefa cadastrada.</p> 
```

### Update Status Task

#### Implementing the Update Status Task

- First, let's create the update method in the `list-tasks.component.ts` file (since update status has no component of its own):

``` TS
import { Component, OnInit } from '@angular/core';

import { Task, TaskService } from './../shared';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})

export class ListTasksComponent implements OnInit {

  tasks: Task[]

  constructor(private taskService: TaskService) {}

  ngOnInit() { // chamado no angular logo após a inicialização do construtor
    this.tasks = this.getAll();
  }

  getAll(): Task[] {
    return this.taskService.getAll();
  }

  delete($event: any, task: Task): void {
    if (confirm('Deseja remover a tarefa "' + task.name + '"?')) {
      this.taskService.delete(task.id);
      this.tasks = this.taskService.getAll();
    }
  }

  updateStatus(task: Task): void {
    if (confirm('Deseja alterar o status da tarefa "' + task.name + '"?')) {
      this.taskService.updateStatus(task.id);
      this.tasks = this.taskService.getAll();
    }
  }
}
```

- Now, let's make a change in the `list-tasks.component.html` file by adding the `click` event to call the `updateStatus` method on the `input` element:

``` HTML
<h1>Tarefas</h1>

<table class="table table-striped table-bordered table-hover">
  <tbody>
    <tr>
    	<th>Tarefa</th>
      <th>Concluída</th>
    	<th class="text-center">
        <!--[...]-->
      </th>
    </tr>

    <tr *ngFor="let task of tasks"> 
      <td [class.success]="!task.completed"> 
        {{ task.name }} 
      </td>
      <td style="width: 70px" class="text-center">
        <input
          type="checkbox"
          [value]="task.id"
          [checked]="task.completed"
          (click)="updateStatus(task)">
      </td>
      <!--[...]-->
    </tr>
  </tbody>
</table>

<p *ngIf="tasks.length==0">Nenhuma tarefa cadastrada.</p> 
```

### Creating a Completed Task directive

- The directive is created using the following command:

```
$ ng g directive tasks/shared/task-completed

CREATE src/app/tasks/shared/task-completed.directive.spec.ts
CREATE src/app/tasks/shared/task-completed.directive.ts
UPDATE src/app/tasks/tasks.module.ts
```

- **Obs.:** Creating a directive is the same as creating a component, the difference between a directive and a component is that a component generates an HTML tag and a directive generates an HTML attribute.

#### Implementing the Completed Task directive

- First, in the `list-tasks.component.ts` file let's define the following code:

``` TS
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskCompleted]'
})

export class TaskCompletedDirective implements OnInit {

  @Input() taskCompleted: boolean; // receber a informação se a tarefa está concluída ou não, através do elemento HTML

  constructor(private el: ElementRef) { } // ElementRef - referência do elemento HTML

  ngOnInit(): void {
    if (this.taskCompleted) { // se taskCompleted for true...
      this.el.nativeElement.style.textDecoration = "line-through"; // aplica a marcação
    }
  }
}
```

- Now, let's make a change to the `list-tasks.component.html` file by adding the `taskCompleted` directive to the `td` element:

``` HTML
<h1>Tarefas</h1>

<table class="table table-striped table-bordered table-hover">
  <tbody>
    <tr>
    	<th>Tarefa</th>
      <th>Concluída</th>
    	<th class="text-center">
        <!--[...]-->
      </th>
    </tr>

    <tr *ngFor="let task of tasks">
      <td
        [taskCompleted]="task.completed"
        [class.success]="!task.completed"> 
        {{ task.name }} 
      </td>
      <td style="width: 70px" class="text-center">
        <input
          type="checkbox"
          [value]="task.id"
          [checked]="task.completed"
          (click)="updateStatus(task)">
      </td>
      <td class="text-center" style="width: 200px">
        <!--[...]-->
      </td>
    </tr>
  </tbody>
</table>

<p *ngIf="tasks.length==0">Nenhuma tarefa cadastrada.</p> 
```

## PROJECT HASH

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

- In `dashboard.service.ts` we will define the methods of this service:
