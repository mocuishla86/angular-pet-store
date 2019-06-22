import { Component, OnInit } from '@angular/core';
import { PetService, Pet } from '../typescript-angular-client';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet:Pet;
  error:string;

  constructor(private service:PetService) { }

  ngOnInit() {
    this.service.getPetById(1).toPromise()
    .then(pet => this.pet = pet)
    .catch(error => this.error = error);
  }

}
