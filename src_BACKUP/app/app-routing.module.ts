import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ServicesTestComponent } from "./services-test/services-test.component";
import { FirebaseComponent } from './firebase/firebase.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes : Routes = [
    {path : 'login', component : LoginComponent},
    {path : 'home', component : HomeComponent},
    {path : 'recipes', component : RecipesComponent},
    {path : 'shopping_list', component : ShoppingListComponent},
    {path : 'services_test' , component : ServicesTestComponent},
    {path : 'firebase', component : FirebaseComponent},
    {path : 'users' , component : UsersComponent},
    {path : 'users/:id' , component : UserComponent},
    {path : 'servers', component : ServersComponent},
    // {path : 'servers', component : ServersComponent, children: [
    //     {path: ':id', component : ServerComponent },
    //     {path : ':id/edit', component : ServerEditComponent},
    // ]},
    {path : 'servers/:id', component : ServerComponent},
    {path : 'servers/:id/edit', component : ServerEditComponent},
    {path : 'signup', component : SignupComponent},
    {path : '' , component : HomeComponent},
    {path : '**', component : HomeComponent}    
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}