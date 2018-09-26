import { Component, OnInit } from '@angular/core';
import  {PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: '/o/angular-posts-portlet/js/app/components/posts/posts.component.html',
  styleUrls: ['/o/angular-posts-portlet/js/app/components/posts/posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {

      this.postService.getPosts().subscribe( posts => {
        this.posts = posts;
      });

  }

}
