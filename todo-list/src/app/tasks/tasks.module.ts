import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskCompletedDirective } from './shared';
import { ListTasksComponent } from './list-tasks';
import { RegisterTaskComponent } from './register-task';
import { EditTaskComponent } from './edit-task';

@NgModule({
  declarations: [
    ListTasksComponent,
    RegisterTaskComponent,
    EditTaskComponent,
    TaskCompletedDirective
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
