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
