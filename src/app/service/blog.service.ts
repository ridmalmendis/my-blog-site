import { Injectable } from '@angular/core';
import { Blog }  from "../model/blog";
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
 providedIn: 'root'
})
export class BlogService {

 
  blogs:Blog[] = [
    // {
    //   id: 1,
    //   title: 'getstrawithanguler',
    //   date: new Date,
    //   rating : 2,
    //   imgUrl:'https://www.gstatic.com/webp/gallery/1.jpg',
    //   description: 'ajshfaSGfAIUSGfiuAGSfasugfiug',
    // },
    
    // {
    //   id: 2,
    //   title: 'getstratwithanguler2',
    //   date: new Date,
    //   rating : 3,
    //   imgUrl:'https://www.gstatic.com/webp/gallery/1.jpg',
    //   description: 'ajshfaSGfAIUSGfiuAGSfasugfiug',
    // },
    
    // {
    //   id: 3,
    //   title: 'getstratwithanguler3',
    //   date: new Date,
    //   rating : 4,
    //   imgUrl:'https://www.gstatic.com/webp/gallery/1.jpg',
    //   description: 'ajshfaSGfAIUSGfiuAGSfasugfiug',
    // },
    
    ];

    constructor(private http: HttpClient) {
      this.getBlogs();
      console.log("call")
    }
    getBlogs() {
      this.http.get('https://run.mocky.io/v3/40d1dd50-1cc9-42b0-afdd-0d75c7186fe3').pipe(catchError(this.handleError)).subscribe((val: Blog[]) => {
        this.blogs=val;
      });
    }
  

  addBlog(blog: Blog) {
    this.blogs.push(blog)
    console.log(this.blogs)
  }

  private handleError(error: Response | any) {
    return null
    // return Observable.throw(error);
  }

  

   
}
