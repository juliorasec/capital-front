import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [];

  // utilizar constructor para injeção das dependencias
  constructor(private userService: UserService, private router: Router) { }

  // criar ciclo de vida
  ngOnInit() {
    this.userService.getAllUsers().subscribe(retornoDaAPI => {

      // conversão do objeto complexo (um objeto aninhado com outros objetos) para um array simples.
      const usersArray = Object.keys(retornoDaAPI).map((key) => retornoDaAPI[key]);
      this.users = usersArray;
    });
  }

  // rota para edição, atraves do codigo identificador (no caso o email)
  editarClick(email: string) {
    this.router.navigateByUrl(`user/edit/${email}`);
  }
}
