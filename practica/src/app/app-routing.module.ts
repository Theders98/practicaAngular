import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';


const routes: Routes = [
  { path :'', component : HomeComponent},
  { path :'pokemons', component : PokemonsComponent},
  { path :'personajes', component : PersonajesComponent,
  children : [

    { path :':id', component : PersonajesComponent }

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
