import { Component } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { Dragonball } from '../../interfaces/dragonball';

type Race = 'saiyan' | 'human' | 'namekian' | 'Majin' | 'Frieza Race' | 'Android' | 'Jiren Race' | 'God' | 'Angel' | 'Evil' | 'Nucleico' | 'Nucleico benigno' | 'Unknown';

@Component({
  selector: 'app-by-race',
  templateUrl: './by-race.component.html',
  styles: ``
})
export class ByRaceComponent {

  public characterRace: Dragonball[] = [];
  public races: Race[] = ['saiyan', 'human', 'namekian', 'Majin', 'Frieza Race', 'Android', 'Jiren Race', 'God', 'Angel', 'Evil', 'Nucleico', 'Nucleico benigno', 'Unknown'];
  public selectedRace?: Race;
  public isLoading: boolean = false;

  constructor(
    private dragonBallService: DragonballService
  ){}

  onRaceChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.searchByRace(selectedValue);
  }

  searchByRace( term: string ){
    this.isLoading = true;
    this.dragonBallService.searchByRaceServices(term)
      .subscribe( characterRace => {
        this.characterRace = characterRace;
        this.isLoading = false;
        console.log(this.characterRace);
      });
  }

}
