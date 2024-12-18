import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dragon-ball-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';


  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue( value: string ){
    this.onValue.emit(value);
  }

}
