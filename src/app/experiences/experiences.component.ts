import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience';
import { EXPERIENCES } from '../collectionOfPositions'

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences = EXPERIENCES;

  selectedExperience?: Experience;

  onSelect(experience: Experience): void {
    this.selectedExperience = experience;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
