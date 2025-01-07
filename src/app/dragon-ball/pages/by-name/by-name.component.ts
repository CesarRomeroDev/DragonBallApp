import { Component, OnInit } from '@angular/core';
import { Dragonball } from '../../interfaces/dragonball';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styles: ``
})
export class ByNameComponent implements OnInit {

  public characterName: Dragonball[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(
    private dragonBallService: DragonballService
  ){}

  ngOnInit(): void {
    this.characterName = this.dragonBallService.cacheStore.byName.character;
    this.initialValue = this.dragonBallService.cacheStore.byName.term;
  }

  searchByName(term: string){
    this.isLoading = true;
    this.dragonBallService.searchByNameServices(term)
      .subscribe( characterName => {
        this.characterName = characterName;
        this.isLoading = false;
    });
  }

}
