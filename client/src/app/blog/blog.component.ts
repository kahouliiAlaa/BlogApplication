import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  upvoteColor = "";
  p: number = 1;
  searchText: any;

  constructor(private blogService: BlogService, private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getAllBlog();
  }

  getAllBlog() {
    this.blogService.getBlogs().subscribe({
      next: (result) => {
        this.blogs = result

      }
    });
  }

  navigateToblogDetails(blog: Blog) {
    const navigationExtras: NavigationExtras = {
      state: {
        blog: blog,
      },
      relativeTo: this.route,
    };

    return this.router.navigate(["/blog-details"], navigationExtras);
  }

  navigateToAddBlog() {
    return this.router.navigate(["/add-blog"]);
  }

  upvote(blog: Blog) {
    blog.upVote = Number(blog.upVote) + 1
    if (blog.upVote > blog.downVote) {
      this.upvoteColor = "rgb(170, 247, 170)";
    } else {
      this.upvoteColor = "rgb(247, 97, 97)"
    }
  }
  downVote(blog: Blog) {
    blog.downVote = Number(blog.downVote) + 1
    if (blog.upVote > blog.downVote) {
      this.upvoteColor = "rgb(170, 247, 170)";
    } else {
      this.upvoteColor = "rgb(247, 97, 97)"
    }
  }

}
