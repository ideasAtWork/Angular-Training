import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../shared/avatar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  avatarUrl: string;

  constructor(private avatarService: AvatarService) { }

  ngOnInit() {
  }

  getAvatarUrl(name: string) {
    this.avatarUrl = this.avatarService.getAvatarUrl(name);
  }

}
