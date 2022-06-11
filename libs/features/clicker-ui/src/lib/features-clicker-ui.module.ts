import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickBordComponent } from './board/board.component';
import { ClickBoardAPICheckComponent } from './api-check/api-check.component';
import { ClickBordStatisticsComponent } from './statistics/statistics.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ClickBordComponent },
      { path: 'stats', pathMatch: 'full', component: ClickBoardAPICheckComponent },
      { path: 'api-check', pathMatch: 'full', component: ClickBordStatisticsComponent },
    ]),
  ],
  declarations: [
    ClickBordComponent,
    ClickBoardAPICheckComponent,
    ClickBordStatisticsComponent,
  ],
})
export class FeaturesClickerUiModule {}
