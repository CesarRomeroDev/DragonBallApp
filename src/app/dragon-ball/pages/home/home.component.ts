import { Component, OnInit } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { Dragonball } from '../../interfaces/dragonball';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit{

  public character: Dragonball[] = [];

  constructor(
    private dragonBall: DragonballService
  ){}

  ngOnInit(): void {
    this.dragonBall.searchCharacter()
    .subscribe( (character) => {
      this.character = character
    });
  }

}
