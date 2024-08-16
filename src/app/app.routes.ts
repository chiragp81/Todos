import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'input-output',
        loadComponent: () => import('./input-output/user/user.component')
            .then(m => m.UserComponent)
    },
    {
        path: 'hierarchical-di',
        loadComponent: () => import('./hierarchical-di/hierarchical-di.component')
            .then(m => m.HierarchicalDiComponent)
    }
];
