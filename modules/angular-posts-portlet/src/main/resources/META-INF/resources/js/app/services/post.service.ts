import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';


const httpOptions = {
  headers: new Headers({'Content-type':'application/json'})
}

@Injectable()
export class PostService {

  postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.postUrl).map((res : Response) => <Post[]>res.json());
  }

  /*savePost(post: Post): Observable<Post> {
      return this.http.post(this.postUrl, post, httpOptions);
  }*/

}


