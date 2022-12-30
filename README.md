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

![image](https://user-images.githubusercontent.com/86172286/207194739-3cfaf949-21ea-4c6f-b372-38aaa63cfd1c.png)

- **Components:** An Angular application is based on components. With them, we can encapsulate interface behaviors and rules, which makes creating applications much simpler. Also, a component can encapsulate other components.

A component is made up of 3 items:

  - HTML template
  - Css
  - A class that manages properties and behaviors

![image](https://user-images.githubusercontent.com/86172286/207196452-2b481d99-213f-466c-b42a-131f55f7697f.png)

- **Services:** Services are created to concentrate all the application's business rules. Each service can be used by more than one component.

They are not restricted to that, but what usually happens is that we use services to encapsulate the code responsible for rules with a specific purpose, such as retrieving or submitting data in a RESTful API (backend).

![image](https://user-images.githubusercontent.com/86172286/207196640-e82183ae-103a-4978-8c33-5991e9512f90.png)

With this, we can leave the components focused on managing parts of the screen that the user will see and the services focused on code with another specific purpose.

- **Dependency injection:** Dependency injection is a design pattern that can be applied regardless of language.

This pattern lets you make component classes cleaner and more efficient by delegating complex tasks and business rules to services.

Going deeper, dependency injection is the process of providing the necessary instances that a given class needs to be instantiated and used.

The big advantage is that we have less coupling between our classes.

Angular implements a dependency injection mechanism and runs it at application startup.

- **Modules:** Another important element is the modules. They help to make our application more organized. 

It is possible to create modules that group components, services and other elements by some similarity.

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

## PROJECT TODO LIST

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

### Registering task listing routes

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

### Implementing the task list:

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

### Implementing the task list - part II:

- First, let's make a change to `list-tasks.component.html` by adding the `*ngFor` directive to the list of tasks:

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
          <!-- colchetes [] - operador de atribuição do angular
            [value]="task.id" - nesse caso ele só está atribuindo o id da tarefa ao atributo value do input do tipo checkbox
            [checked]="task.completed" - nesse caso ele irá marcar o checkbox com o "check" se a tarefa estiver completa, ou seja, completed for true
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

<p *ngIf="tasks.length==0">Nenhuma tarefa cadastrada.</p> <!-- *ngIf - Diretiva do angular - essa diretiva só irá exibir o texto se o tamanho da lista for igual a 0-->
```