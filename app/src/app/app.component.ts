import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaPokemonComponent } from "./lista-pokemon/lista-pokemon.component";
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ListaPokemonComponent, PokemonCardComponent]
})
export class AppComponent {
  title = 'app';
}
