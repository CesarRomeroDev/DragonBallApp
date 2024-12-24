import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'dragon-ball-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer = new Subject<string>(); //Un Subjet se hace para realizar un nuevo Observable manualmente.
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';


  /*   @Output()
  public onValue: EventEmitter<string> = new EventEmitter(); */

  @Output()
  public ondebounce = new EventEmitter<string>();


  ngOnInit(): void {
   this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(10)
    )
    .subscribe( value => {
      this.ondebounce.emit( value );

    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  /*   emitValue( value: string ){
    this.onValue.emit(value);
    } */

  onKeyPress( searchTerm: string ){
    this.debouncer.next(searchTerm)

  }

}
