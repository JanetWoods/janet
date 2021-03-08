import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experience: Experience = {
    id: 1,
    positionTitle: 'Junior Software Developer',
    employer: 'TEKSystems',
    duties: 'Bug fixes with C#, Documentation',
  startDate: '2020, 3',
  endDate: '2021, 3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
