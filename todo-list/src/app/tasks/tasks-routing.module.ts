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
