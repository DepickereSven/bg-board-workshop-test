import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { StoreUiSharedModule } from '@bg-board/store/ui-shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreUiSharedModule,
    RouterModule.forRoot(
      [
        {
          path: 'store-feature-game-detail',
          loadChildren: () =>
            import('@bg-board/store/feature-game-detail').then(
              (module) => module.StoreFeatureGameDetailModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
