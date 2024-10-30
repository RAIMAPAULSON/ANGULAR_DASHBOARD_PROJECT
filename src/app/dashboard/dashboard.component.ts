import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  navVisible = false;
  users = [
    {
      id: '123456789',
      name: 'Monica James',
      phone: '+91 9876543210',
      transactionCategory: 'Income',
      transactionType: 'Salary',
      transactionAmount: 200,
      accountType: 'Savings',
      balanceAmount: 6000,
      showViewLink: false,
      highlighted: false
    },
    {
      id: '123456789',
      name: 'Samantha',
      phone: '+91 9876543210',
      transactionCategory: 'Income',
      transactionType: 'Salary',
      transactionAmount: 200,
      accountType: 'Savings',
      balanceAmount: 6000,
      showViewLink: true,
      highlighted: true
    },
    {
      id: '123456789',
      name: 'Catherine',
      phone: '+91 9876543210',
      transactionCategory: 'Income',
      transactionType: 'Salary',
      transactionAmount: 200,
      accountType: 'Savings',
      balanceAmount: 6000,
      showViewLink: false,
      highlighted: false
    },
    {
      id: '123456789',
      name: 'Monica James',
      phone: '+91 9876543210',
      transactionCategory: 'Income',
      transactionType: 'Salary',
      transactionAmount: 200,
      accountType: 'Savings',
      balanceAmount: 6000,
      showViewLink: false,
      highlighted: false
    },
    {
      id: '123456789',
      name: 'Ileana Sam',
      phone: '+91 9876543210',
      transactionCategory: 'Income',
      transactionType: 'Salary',
      transactionAmount: 200,
      accountType: 'Savings',
      balanceAmount: 6000,
      showViewLink: false,
      highlighted: false
    },
  ];

  constructor(private logoutRouter:Router){}
  toggleNav() {
    this.navVisible = !this.navVisible;
  }
  logout(){
    this.logoutRouter.navigateByUrl('');
  }

  }
