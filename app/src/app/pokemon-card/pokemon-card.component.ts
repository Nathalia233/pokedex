import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPokemonComponent } from '../lista-pokemon/lista-pokemon.component';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.sass'
})
export class PokemonCardComponent {
  @Input()
  pokemon!: string;

  @Input()
  numero! : number;

  PegarIMG(){
    const numeroformatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroformatado}.png`;
    
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size|| 2)) {
      s = '0' + s;
    }
    return s;
  }
  
}
