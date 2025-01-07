import { Component, OnInit } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { Dragonball, DragonballSuper, Transformation } from '../../interfaces/dragonball';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'dragon-ball-by-person',
  templateUrl: './by-person.component.html',
  styles: ``
})
export class ByPersonComponent implements OnInit{

  public dragonBallCode?: DragonballSuper
  public dragonBallTransf: Transformation[] = [];
  public hasLoaded: boolean = false;

  constructor(
    private activateRouter: ActivatedRoute,
    private dragonballServices: DragonballService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.searchByTransformation();
    this.activateRouter.params
    .pipe(
      switchMap( ( {id} ) => this.dragonballServices.seaechCharacterByAlphCodeServices(id) ),
    )
    .subscribe( dragonBall => {
      if ( !dragonBall ) {
        return this.router.navigateByUrl('');
      }
      return this.dragonBallCode = dragonBall;
    });
  }

  searchByTransformation(){
    this.activateRouter.params
    .pipe(
      switchMap( ({id}) => this.dragonballServices.seaechCharacterByAlphCodeTransfoServices(id)),
    )
    .subscribe( dragon => {
      return this.dragonBallTransf = dragon;
    })
  }

  onLoad(){
    setTimeout( () => {
      this.hasLoaded = true;
    }, 1000 )

  }

}
