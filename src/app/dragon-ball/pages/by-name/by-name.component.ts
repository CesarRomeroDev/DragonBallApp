import { Component } from '@angular/core';
import { Dragonball } from '../../interfaces/dragonball';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styles: ``
})
export class ByNameComponent {

  public characterName: Dragonball[] = [];

  constructor(
    private dragonBallService: DragonballService
  ){}

  searchByName(term: string){
    this.dragonBallService.searchByNameServices(term)
      .subscribe( characterName => {
        this.characterName = characterName;
    });
  }

}
