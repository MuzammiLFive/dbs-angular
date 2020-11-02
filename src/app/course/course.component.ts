import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses;
  constructor(private courseService: CourseService) {
    this.courses = courseService.fetchAllCourses();
  }

  ngOnInit(): void {}

  closeRegistration(course) {
    console.log(`Inside the parent container.`);
    this.courses = this.courses.filter((c) => course.name !== c.name);
  }
}
