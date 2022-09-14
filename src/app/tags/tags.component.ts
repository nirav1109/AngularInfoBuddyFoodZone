import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/Food/food.service';
import { Tag } from '../shared/models/Tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?:Tag[] = [];
  @Input() foodPageTags?:string[];
  @Input() justifyContent:string = 'center';
  constructor(private foodService:FoodService) { }

  ngOnInit() {
    if(!this.foodPageTags)
    this.tags = this.foodService.getAllTag();
  }

}
