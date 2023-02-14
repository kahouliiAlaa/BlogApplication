import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blogForm: FormGroup;
  constructor(private fb: FormBuilder, private blogService: BlogService,private router: Router) { }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      title: new FormControl(''),
      content: new FormControl(''),
      author: new FormControl(''),
    });
  }


  addNewBlog() {
    let blog: Blog = {} as Blog;
    blog = this.blogForm.value
    blog.upVote=0
    blog.downVote=0
    this.blogService.addBlog(blog).subscribe(data => {
     if(data!=null){
       this.router.navigate(["/blogs"]);
     }
    
    })

  }
}
