import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AVATAR_URL } from '../config/constants';

@Injectable()
export class AvatarService {

  constructor(
    private http: HttpClient
  ) {
    console.log(AVATAR_URL);
  }

  getAvatarUrl(name: string) {
    return `${AVATAR_URL}${name}.png`;
  }

}
