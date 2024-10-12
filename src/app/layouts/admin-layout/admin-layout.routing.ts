import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'monitor',
        loadChildren: () => import('app/monitor/monitor.module').then(m => m.MonitorModule)
    },
    {
        path: 'faults',
        loadChildren: () => import('app/faults/faults.module').then(m => m.FaultsModule)
    },
    {
        path: 'properties',
        loadChildren: () => import('app/properties/properties.module').then(m => m.PropertiesModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('app/admin/admin.module').then(m => m.AdminModule)
    }
];
