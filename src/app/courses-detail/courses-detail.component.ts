import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrl: './courses-detail.component.css'
})
export class CoursesDetailComponent {
 //lo que pasamos por parametro podemos obtenerlo
  course: string = '';
  // constructor(private route: ActivatedRoute){
  //   //this.route.params.subscribe(params => console.log(params));
  //   this.route.params.subscribe(params => this.course = params['course']);
  // }

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => this.course = params['course']);
  }
}
