import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  courses = [
    {
      name: 'Angular',
      imgPath: '../../assets/images/angular.png',
      duration: 40,
      students: 10,
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
      students: 5,
    },
    {
      name: 'Docker',
      imgPath: '../../assets/images/docker.jpg',
      price: 15000,
      duration: 10,
      students: 7,
    },
    {
      name: 'K8s',
      imgPath: '../../assets/images/k8s.png',
      price: 30000,
      duration: 25,
      students: 10,
    },
  ];

  fetchAllCourses() {
    return this.courses;
  }
}
