import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {
  @Output() closeHelp: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
