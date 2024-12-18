import { Component } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { Dragonball } from '../../interfaces/dragonball';

@Component({
  selector: 'app-by-race',
  templateUrl: './by-race.component.html',
  styles: ``
})
export class ByRaceComponent {

  public characterRace: Dragonball[] = [];

  constructor(
    private dragonBallService: DragonballService
  ){}

  searchByRace( term: string ){
    this.dragonBallService.searchByRaceServices(term)
      .subscribe( characterRace => {
        this.characterRace = characterRace;
        console.log(this.characterRace);
      });
  }

}
