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
    dutyList = []

  selectedExperience?: Experience;

  onSelect(experience: Experience): void {
    this.splitDuties(experience);
    this.selectedExperience = experience;
  }

  constructor() { }

  ngOnInit(): void { }

  splitDuties(experience): string[]{
    let dutyList = []

      for (let duty of experience.duties) {
         dutyList.push(duty);
      }
      return dutyList;
  }

  }

  


