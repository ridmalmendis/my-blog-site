import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Blog } from 'src/app/model/blog';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
@Input() blog;
@Output()deteleBlog = new EventEmitter();




rating =[1,2,3,4,5];



  constructor() { }

  ngOnInit(): void {
  }

  deleteBlog(){
    this.deteleBlog.emit();
    
  }

  onClickStar(i: number) {
    if(this.blog.rating=== i){
      this.blog.rating=0;
    }else{
      this.blog.rating=i;
    }
    console.log(i)
  }


  
   
   
   

  

  

}
