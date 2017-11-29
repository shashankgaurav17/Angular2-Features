import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { ShoppingListChildComponent } from './shopping-list/shopping-list-child/shopping-list-child.component';
import { recipesDirective } from 'app/recipes/recipes.directive';
import { ServicesTestComponent } from './services-test/services-test.component';
import { ServerServices } from "./server.services";
import { LoggingService } from "./logging.service";
import { ObservablesComponent } from './observables/observables.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { FirebaseService } from "./firebase.service";
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecipesComponent,
    ShoppingListComponent,
    HomeComponent,
    ShoppingListChildComponent,
    recipesDirective,
    ServicesTestComponent,
    ObservablesComponent,
    FirebaseComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    ServerEditComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServerServices, LoggingService, FirebaseService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }