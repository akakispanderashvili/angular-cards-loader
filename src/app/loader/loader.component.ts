import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  isColor = false;
  loading = false;
  cardsShown = false;
  changeColor() {
    this.isColor = !this.isColor;
  }
  users = [
    {
      firstName: 'Ana',
      lastName: 'Iadze',
      about: "I'm a developer",
      birthDate: '01/01/1990',
      status: 'active',
      clicked: false,
    },
    {
      firstName: 'Valeri',
      lastName: 'Gogia',
      about: "I'm a designer",
      birthDate: '01/01/1995',
      status: 'deleted',
      clicked: false,
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      about: "I'm a QA",
      birthDate: '01/01/2000',
      status: 'inactive',
      clicked: false,
    },
    {
      firstName: 'Akaki',
      lastName: 'Spanderashvili',
      about: "I'm a project manager",
      birthDate: '01/01/2005',
      status: 'active',
      clicked: false,
    },
  ];
  loadUsers() {
    this.loading = true;

    setTimeout(() => {
      this.users = this.users;
      this.loading = false;
      this.cardsShown = true;
    }, 3000);
  }
}
