import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

  pokemons : pokemon [];

  constructor(private pokemonsService : PokemonsService) { }
  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
}
}
