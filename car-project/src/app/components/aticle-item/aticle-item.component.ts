import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/interfaces/article.interface';

@Component({
  selector: 'app-aticle-item',
  templateUrl: './aticle-item.component.html',
  styleUrls: ['./aticle-item.component.scss'],
})
export class AticleItemComponent implements OnInit {
  @Input() article!: Article;
  @Input() reversed: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
