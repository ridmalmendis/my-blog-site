import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HeaderComponent } from './common/header/header.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { StarComponent } from './blogs/star/star.component';
import { RouterModule } from '@angular/router';
import { BlogService } from './service/blog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogComponent,
    CreateBlogComponent,
    HeaderComponent,
    ViewBlogComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'create-blog', component: CreateBlogComponent },{ path: 'view-blog/:id', component: ViewBlogComponent },{ path: '', component: BlogsComponent }])
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
