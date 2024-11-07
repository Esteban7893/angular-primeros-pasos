import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public onDeleteIdEmmiter : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [

    {
      id:'',
      name: 'Trunk',
      power: 10,
    },
  ];

  onDeleteCharacterById(id: string): void {
    // TODO Emitir el id del personaje
    console.log(id);
    this.onDeleteIdEmmiter.emit(id);
  }
}
