import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'boards', component: MainBoardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
