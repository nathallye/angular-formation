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
