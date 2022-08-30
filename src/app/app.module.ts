import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {IdeaaaComponent} from './ideaaa/ideaaa.component';
import {VotingComponent} from './voting/voting.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { EevenPipe } from './Pipes/eeven.pipe';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const router: Routes = [
  {path: "", component: HomeComponent},
  {path: "addIdeas", component: IdeaaaComponent},
  {path: "register", component: RegisterComponent},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    IdeaaaComponent,
    VotingComponent,
    HomeComponent,
    NotFoundComponent,
    EevenPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
