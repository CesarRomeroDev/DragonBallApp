import { Component, Input } from '@angular/core';
import { Dragonball } from '../../interfaces/dragonball';

@Component({
  selector: 'dragonball-card',
  templateUrl: './dragonball-card.component.html',
  styles: ``,
})
export class DragonballCardComponent {

  public hasLoaded: boolean = false;

@Input()
  public dragonBallCard: Dragonball[] = [];


  onLoad(){
    setTimeout( () => {
      this.hasLoaded = true;
    }, 700 )

  }

}
