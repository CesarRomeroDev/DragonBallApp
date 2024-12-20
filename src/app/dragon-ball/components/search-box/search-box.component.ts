import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'dragon-ball-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {

  private debouncer = new Subject<string>(); //Un Subjet se hace para realizar un nuevo Observable manualmente.

  @Input()
  public placeholder: string = '';


  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public ondebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(10)
    )
    .subscribe( value => {
      this.ondebounce.emit( value );

    })
  }

  emitValue( value: string ){
    this.onValue.emit(value);
  }

  onKeyPress( searchTerm: string ){
    this.debouncer.next(searchTerm)

  }

}
