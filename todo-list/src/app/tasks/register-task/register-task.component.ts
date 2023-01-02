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
