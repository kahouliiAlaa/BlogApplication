import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path : "" , component : BlogComponent},
  {path : "blogs" , component : BlogComponent},
  {path : "blog-details" , component : BlogDetailsComponent},
  {path : "add-blog" , component : AddBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
