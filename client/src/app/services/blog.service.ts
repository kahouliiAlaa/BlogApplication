import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Blog } from '../models/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getBlogsUrl = "http://localhost:8000/blog";
  addBlogsUrl = "http://localhost:8000/blog";

  getBlogs() {
    return this.http.get<Blog[]>(this.getBlogsUrl);
  }

  addBlog(blog: Blog) {
    return this.http.post(this.addBlogsUrl, blog);
  }

  updateBlog(id: string, blog: Blog) {
    return this.http.put(this.addBlogsUrl + "/" + id, blog);
  }
}
