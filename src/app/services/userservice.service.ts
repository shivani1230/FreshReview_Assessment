import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  //get data for posts
  getPostsdata(): Observable<any> {return this.http.get<any>(`${this.URL}`)}

  //get data for comments
  getCommentdata(postId:number): Observable<any> {return this.http.get<any>(`${this.URL}/${postId}/comments`)}
}
