import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'planning',
        children: [
            { path: 'dashboard',      component: DashboardComponent },
            { path: 'table-list',     component: TableListComponent },
            { path: 'typography',     component: TypographyComponent },
            { path: 'icons',          component: IconsComponent },
            { path: 'notifications',  component: NotificationsComponent },
            { path: 'cameras',        component: UpgradeComponent },
        ]
    },
    {
        path: 'monitor',
        loadChildren: () => import('app/monitor/monitor.module').then(m => m.MonitorModule)
    },
    {
        path: 'deploy',
        loadChildren: () => import('app/planning/planning.module').then(m => m.PlanningModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('app/admin/admin.module').then(m => m.AdminModule)
    }
];
