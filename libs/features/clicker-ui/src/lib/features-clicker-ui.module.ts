// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// UI Modules
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';

// feature modules
import { ClickBordComponent } from './board/board.component';
import { ClickBoardAPICheckComponent } from './api-check/api-check.component';
import { ClickBordStatisticsComponent } from './statistics/statistics.component';
import { ClickerApiModule } from '@pipeline-example/data-access/clicker-api';

@NgModule({
  imports: [
    // Core Modules
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ClickBordComponent },
      {
        path: 'stats',
        pathMatch: 'full',
        component: ClickBordStatisticsComponent,
      },
      {
        path: 'api-check',
        pathMatch: 'full',
        component: ClickBoardAPICheckComponent,
      },
    ]),

    // UI Modules
    MatCommonModule,
    MatRippleModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,

    // Business-Logic Modules
    ClickerApiModule.forChild(),
  ],
  declarations: [
    ClickBordComponent,
    ClickBoardAPICheckComponent,
    ClickBordStatisticsComponent,
  ],
})
export class FeaturesClickerUiModule {}
