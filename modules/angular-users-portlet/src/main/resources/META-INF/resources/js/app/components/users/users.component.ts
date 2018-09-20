import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: '/o/angular-users-portlet/js/app/components/users/users.component.html',
  styleUrls: ['/o/angular-users-portlet/js/app/components/users/users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  showExtended:boolean = false;
  loaded:boolean = false;
  enableAdd:boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {

     //Endroit il faudrait apeller un service pour renseigner des properties par exemple. Meilleur endroit que dans le contructeur

    setTimeout(() => {

      this.users = [
        {  
          firstName: 'John',
          lastName: 'Doe ',
          age: 30,
          address: {
              street: '50 Main st',
              city: 'Boston ',
              state: 'MA'
          },   
          image: 'https://loremflickr.com/100/100/paris',
          isActive:true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00'),
          hide:true   
        },
        {  
          firstName: 'Jean-Paul',
          lastName: 'DA CUNHA',
          age: 38,
          address: {
              street: '07 rue de Maffliers',
              city: 'Monstoult',
              state: 'France' 
          },
          image: 'https://loremflickr.com/100/100/people',
          isActive:false,
          balance: 200,
          //C'est un piége on parle du 11 mars 2017
          registered: new Date('03/11/2017 08:30:00'),
          hide:true              
        },
        {  
          firstName: 'Elena',
          lastName: 'DA CUNHA',
          image: 'https://loremflickr.com/100/100/girl',
          isActive:true,
          hide:true           
        },
        {  
          firstName: 'Jenny',
          lastName: 'From the block',
          age: 30,
          address: {
              street: '48 Main st',
              city: 'Boston',
              state: 'MA'
          },
          image: 'https://loremflickr.com/100/100/girl',
          isActive:true,
          balance: 500,
          registered: new Date('11/02/2016 10:30:00'),
          hide:true                
        }
     ];

     this.addUser(
      {  
        firstName: 'David',
        lastName: 'Jackson',
        age: 30,
        address: {
            street: '48 Main st',
            city: 'Boston',
            state: 'MA'
        },
        image: 'https://loremflickr.com/100/100/man',
        hide:true           
      }

    );

     this.loaded = true;

    }, 2000)

    this.showExtended = true;

    this.setCurrentClasses();
    this.setCurrentStyles();
   
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success':this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top':this.showExtended ? '0' : '40px',
      'font-size':this.showExtended ? '' : '40px'
    }
  }

  fireEvent(e : any) {
    console.log('Button Clicked : ' + e.type);

  }

  toggleHide(user:User) {
    user.hide = !user.hide;
  }

}
