import { Component } from '@angular/core';
import { GiphyService, Giphy } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  giphys: Giphy[] = [];

  constructor(private giphySvc: GiphyService){}

  performSearch(searchTerms: string){
    console.log('Search this: ', searchTerms);
    this.giphySvc.search(searchTerms)
      .then((result: Giphy[])=>{
        console.log(result);
        this.giphys=result;
      })
      .catch(err=>{
        console.log("ERROR: ", err);
      })

  }
  
}
