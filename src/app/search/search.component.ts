import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItem:string='';
  constructor( private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  this.route.params.subscribe(param=>{
    if(param['searchItem'])
    this.searchItem = param['searchItem'];
  });
  }

  search(){
    if(this.searchItem){
      this.router.navigateByUrl('/search/'+this.searchItem);
    }
  }

}
