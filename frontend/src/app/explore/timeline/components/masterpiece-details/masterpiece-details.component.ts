import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Artwork from 'src/app/explore/models/artwork.model';

@Component({
  selector: 'app-masterpiece-details',
  templateUrl: './masterpiece-details.component.html',
  styleUrls: ['./masterpiece-details.component.scss'],
})
export class MasterpieceDetailsComponent implements OnInit {
  @Input() artwork!: Artwork;
  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }
}
