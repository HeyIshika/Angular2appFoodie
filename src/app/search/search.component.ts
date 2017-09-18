import { Component } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';
import { RequestOptions } from '@angular/http';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'app';
  restaurants = [];
  
   
 constructor(private http: Http) {
  
 
 }
   performSearch(cuisine: HTMLInputElement): void {
     let headers = new Headers({ 'user-key' : '4ac19232b9bd80a871ee1735ec470f4a' });
     let requestOpt = new RequestOptions({ headers: headers });
    //  var apiLink = 'https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&cuisines=chinese' + (cuisine.value);
    var apiLink = 'https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&cuisines=' + (cuisine.value);
    
 
     this.http.get(apiLink, requestOpt)
     .subscribe((res: Response) => {
       this.restaurants = res.json().restaurants;
       console.log(this.restaurants);
     });
   } 
}