import { Component, Input, OnInit } from '@angular/core';
import { SmartCard } from 'src/app/models/interfaces/smart-card.interface';
import { SmartPoint } from 'src/app/models/interfaces/smart-point.interface';

@Component({
  selector: 'app-smart-card',
  templateUrl: './smart-card.component.html',
  styleUrls: ['./smart-card.component.scss'],
})
export class SmartCardComponent implements OnInit {
  selectedItem: SmartPoint | null = null;
  @Input() smartCard!: SmartCard;
  constructor() {}
  onSelectItem(smartPoint: SmartPoint | null) {
    this.selectedItem == smartPoint
      ? (this.selectedItem = null)
      : (this.selectedItem = smartPoint);
    console.log(this.selectedItem);
  }
  ngOnInit(): void {}
}
