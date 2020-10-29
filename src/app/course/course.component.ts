import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  courses = [
    {
      name: 'Angular',
      imgPath: '../../assets/images/angular.png',
      duration: 40,
      students: 15,
      price: 100,
    },
    {
      name: 'React',
      imgPath: '../../assets/images/react.png',
      price: 25000,
      duration: 30,
      students: 15,
    },
    {
      name: 'Spring-Boot',
      imgPath: '../../assets/images/spring-boot.png',
      price: 30000,
      duration: 40,
      students: 25,
    },
    {
      name: 'Docker',
      imgPath: '../../assets/images/docker.jpg',
      price: 15000,
      duration: 10,
      students: 15,
    },
    {
      name: 'K8s',
      imgPath: '../../assets/images/k8s.png',
      price: 30000,
      duration: 25,
      students: 10,
    },
  ];
}
