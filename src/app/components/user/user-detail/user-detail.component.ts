import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userID: string;
  user: any;
  opportunities = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.userID = this.activatedRoute.snapshot.params.userid;

    // funçao utilizando ao subscribe, pois tem funçao equivalente ao promise, assim que quando obter a resposta do json, recebera a lista de usuarios (utilizando o codigo identificador (userID))
    this.userService.getUser(this.userID).subscribe(response => {
      this.user = response;
    });

    // funcao utilizada para obter os dados de opportunities do node.
    this.userService.getOpportunities(this.userID).subscribe(response => {
      this.opportunities = response.opportunities;
    });

  }

  // retorno para a pagina user
  backClick() {
    this.router.navigateByUrl('user');
  }

  // funcao para modificar os status ativo do cliente, disponivel para o proprio realizar a mudança
  updateStatusOpportunities(opportunity: any) {

    // função criada para atualizar o status do ativo do cliente
    opportunity.isActive = !opportunity.isActive;
    
    this.userService.updateOpportunities(this.userID, this.opportunities).subscribe(() => {
      alert('Atualizado!');
    });
  }

}
