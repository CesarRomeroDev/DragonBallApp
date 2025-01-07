import { Component, OnInit } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { Dragonball } from '../../interfaces/dragonball';
import { Race } from '../../interfaces/race.type';
@Component({
  selector: 'app-by-race',
  templateUrl: './by-race.component.html',
  styles: ``
})
export class ByRaceComponent implements OnInit {

  public characterRace: Dragonball[] = [];
  public races: Race[] = ['saiyan', 'human', 'namekian', 'Majin', 'Frieza Race', 'Android', 'Jiren Race', 'God', 'Angel', 'Evil', 'Nucleico', 'Nucleico benigno', 'Unknown'];
  public selectedRace?: Race;
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(
    private dragonBallService: DragonballService
  ){}

  ngOnInit(): void {
    this.characterRace = this.dragonBallService.cacheStore.byRace.character;
    this.initialValue = this.dragonBallService.cacheStore.byRace.term;
  }

  onRaceChange(event: Event): void {
    const selectedValue: string = (event.target as HTMLSelectElement).value;
    this.searchByRace(selectedValue);
  }

  searchByRace( term: Race | string ){
    this.isLoading = true;
    this.dragonBallService.searchByRaceServices(term)
      .subscribe( characterRace => {
        this.characterRace = characterRace;
        this.isLoading = false;
        console.log(this.characterRace);
      });
  }

}
