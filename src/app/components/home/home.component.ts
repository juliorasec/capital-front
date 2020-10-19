import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // rota criada para o button levar a pagina user
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  showListUser() {
    this.router.navigateByUrl('user');
  }

}
