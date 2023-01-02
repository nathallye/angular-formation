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

  updateStatus(task: Task): void {
    if (confirm('Deseja alterar o status da tarefa "' + task.name + '"?')) {
      this.taskService.updateStatus(task.id);
      this.tasks = this.taskService.getAll();
    }
  }
}
