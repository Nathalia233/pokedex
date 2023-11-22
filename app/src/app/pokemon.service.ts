import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = []

  constructor(private httpclient: HttpClient ) {
    this.carregarPokemons();
   }
  async carregarPokemons() {
   const requisiçao = await this.httpclient.get<any>('https://pokeapi.co/api/v2/pokemon/151').toPromise();

    this.pokemons = requisiçao.results;
    
  }

}
