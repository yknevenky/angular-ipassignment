import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  depList: string[] = [
    'CSE',
    'EEE',
    'ECE',
    'BIO-TECH',
    'BIO-MED',
    'FOOD-TECH',
    'MECH',
    'CHEMICAL',
    'AERO',
  ];

  checked: boolean = false;

  genderList: string[] = ['Male', 'Female', 'Other'];

  public user: User = new User("Venkatesan", "C","Male" , "yknevenky@gmail.com", 8248989281, "CSE");
}
