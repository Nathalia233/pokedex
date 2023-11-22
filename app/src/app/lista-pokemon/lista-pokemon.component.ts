import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { PokemonService } from '../pokemon.service';
@Component({
    selector: 'app-lista-pokemon',
    standalone: true,
    templateUrl: './lista-pokemon.component.html',
    styleUrl: './lista-pokemon.component.sass',
    imports: [CommonModule, PokemonCardComponent]
})
export class ListaPokemonComponent {
    constructor(public pokemonService: PokemonService){}
}
