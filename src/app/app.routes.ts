import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';

export const routes: Routes = [
    {
        path: '',
        component: Menu,
        children: [
            {
                path: '',
                loadComponent: () => {
                    return import('./components/dashboard/dashboard').then(m => m.Dashboard);
                }
            },
            {
                path: 'recipes',
                loadComponent: () => {
                    return import('./modules/foodBook/recipes/recipelist/recipelist').then(m => m.Recipelist);
                },
            }
        ]
    },
]
