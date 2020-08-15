import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  private _blogsID : number
  public currentBlog: Blog;

  @Input()
  set blogsID(val:number){
      
      this._blogsID = val;

  }
  get blogsID(): number{
    return this._blogsID
  } 
  constructor(private activeRoter: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const _blogsID = +this.activeRoter.snapshot.paramMap.get('id');
    this.currentBlog = this.blogService.blogs.find(blog => blog.id === _blogsID);
    console.log(this.currentBlog);
  }

}
