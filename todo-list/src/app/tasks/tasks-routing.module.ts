import { Routes } from '@angular/router';

import { ListTasksComponent } from './list-tasks';

export const TasksRoutes: Routes = [
	{ path: 'tarefas', redirectTo: 'tarefas/listar' },

	{ path: 'tarefas/listar', component: ListTasksComponent }
];
