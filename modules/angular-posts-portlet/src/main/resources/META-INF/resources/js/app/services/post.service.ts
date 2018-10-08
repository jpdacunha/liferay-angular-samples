import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';


const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}

@Injectable()
export class PostService {

  postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.postUrl);
  }

  /*savePost(post: Post): Observable<Post> {
      return this.http.post(this.postUrl, post, httpOptions);
  }*/

}


