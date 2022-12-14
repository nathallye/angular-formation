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
  	const tasks = localStorage['tarefas']; // 'tasks' - chave que ir?? representar as tarefas no local storage

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
      <th>Conclu??da</th>
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

  ngOnInit() { // chamado no angular logo ap??s a inicializa????o do construtor
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
      <th>Conclu??da</th>
    	<th class="text-center">
        <a
           class="btn btn-xs btn-success">
           <span class="glyphicon glyphicon-plus"
             aria-hidden="true"></span> Novo
        </a>
      </th>
    </tr>

    <tr *ngFor="let task of tasks"> <!-- *ngFor - Diretiva do angular que est?? dentro do pacote FormsModule - essa diretiva ir?? percorrer cada elemento de uma lista -->
      <td [class.success]="!task.completed"> <!-- colchetes [] - operador de atribui????o do angular, nesse caso, se a tarefa N??O(!) estiver concluida ele vai atribuir a class success do bootstrap a esse elemento, deixando o fundo verde -->
        {{ task.name }} <!-- chaves duplas {} - exibe os valores de dentro das vari??veis -->
      </td>
      <td style="width: 70px" class="text-center">
        <input
          type="checkbox"
          [value]="task.id"
          [checked]="task.completed">
          <!-- 
            colchetes [] - operador de atribui????o do angular;
            [value]="task.id" - nesse caso ele s?? est?? atribuindo o id da tarefa ao atributo value do input do tipo checkbox;
            [checked]="task.completed" - nesse caso ele ir?? marcar o checkbox com o "check" se a tarefa estiver completa, ou seja, completed for true;
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

<p *ngIf="tasks.length==0">Nenhuma tarefa cadastrada.</p> <!-- *ngIf - Diretiva do angular - essa diretiva s?? ir?? exibir o texto se o tamanho da lista for igual a 0 -->
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
      <th>Conclu??da</th>
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
  @ViewChild('formTask', { static: true }) formTask: NgForm; // ViewChild - permite termos uma refer??ncia do formul??rio html dentro do componente
  task: Task;

  constructor(
    private taskService: TaskService, 
    private router: Router
  ) { }

  ngOnInit() {
  	this.task = new Task(0, "", false);
  }

  create(): void {
    if (this.formTask.form.valid) { // verifica se o formTask possui algum erro de valida????o, n??o possuir, ?? valido(valid) ent??o chama o m??todo de criar
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
          #name="ngModel" - vari??vel local para representar esse campo de texto(input);
        -->
      <div *ngIf="name.errors && (name.dirty || name.touched)"
        class="alert alert-danger"> <!-- Se possuir erros, ir?? exibi-los -->
        <div [hidden]="!name.errors.required"> <!-- se o input name N??O(!) possuir errors do tipo required ir?? esconder a mensagem -->
          Digite a tarefa.
        </div>
        <div [hidden]="!name.errors.minlength"> <!-- Se o input name N??O(!) possuir errors do tipo minlength ir?? esconder a mensagem -->
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
          (click)="create()" - operador de eventos, quando o bot??o for clicado o evento click er?? chamado e ir?? acionar o m??todo create();
          [disabled]="!formTask.form.valid" - Enquanto o formul??rio possuir erros de valida????o(!formTask.form.valid), vai ficar desabilitado o bot??o Cadastrar;
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
      <th>Conclu??da</th>
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

  @ViewChild('formTask', { static: true }) formTask: NgForm; // ViewChild - permite termos uma refer??ncia do formul??rio html dentro do componente
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
          #name="ngModel" - vari??vel local para representar esse campo de texto(input);
        -->
      <div *ngIf="name.errors && (name.dirty || name.touched)"
        class="alert alert-danger"> <!-- Se possuir erros, ir?? exibi-los -->
        <div [hidden]="!name.errors.required"> <!-- se o input name N??O(!) possuir errors do tipo required ir?? esconder a mensagem -->
          Digite a tarefa.
        </div>
        <div [hidden]="!name.errors.minlength"> <!-- Se o input name N??O(!) possuir errors do tipo minlength ir?? esconder a mensagem -->
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
          (click)="update()" - operador de eventos, quando o bot??o for clicado o evento click ser?? chamado e ir?? acionar o m??todo update();
          [disabled]="!formTask.form.valid" - Enquanto o formul??rio possuir erros de valida????o(!formTask.form.valid), vai ficar desabilitado o bot??o Cadastrar;
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

  ngOnInit() { // chamado no angular logo ap??s a inicializa????o do construtor
    this.tasks = this.getAll();
  }

  getAll(): Task[] {
    return this.taskService.getAll();
  }

  delete($event: any, task: Task): void { // $event - para evitar a atualiza????o da p??gina ap??s a a????o
    $event.preventDefault(); // $event.preventDefault() - desabilita a atualiza????o da p??gina
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
      <th>Conclu??da</th>
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

  ngOnInit() { // chamado no angular logo ap??s a inicializa????o do construtor
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
      <th>Conclu??da</th>
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

  @Input() taskCompleted: boolean; // receber a informa????o se a tarefa est?? conclu??da ou n??o, atrav??s do elemento HTML

  constructor(private el: ElementRef) { } // ElementRef - refer??ncia do elemento HTML

  ngOnInit(): void {
    if (this.taskCompleted) { // se taskCompleted for true...
      this.el.nativeElement.style.textDecoration = "line-through"; // aplica a marca????o
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
      <th>Conclu??da</th>
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
