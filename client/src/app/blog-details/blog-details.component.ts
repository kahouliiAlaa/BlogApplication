import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  selectedBlog : Blog 
  constructor(private _location: Location, private router: Router,
    private route: ActivatedRoute) { 
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
        const state = navigation.extras.state as {
          blog: Blog;
        };
  
        this.selectedBlog = state.blog;
      } else {
        this._location.back();
      }
    }

  ngOnInit(): void {
    console.log(this.selectedBlog)
    
  }
  Retour() {
    return this.router.navigate(["/blogs"]);
  }

}
