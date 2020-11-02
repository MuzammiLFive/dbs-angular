import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('data') course;

  @Output('full') full = new EventEmitter();
  enroll(name: string) {
    console.log(`Enrolled: ${this.course.students}`);
    this.course.students++;
    if (this.course.students > 20) {
      this.full.emit(this.course);
    }
  }
}
