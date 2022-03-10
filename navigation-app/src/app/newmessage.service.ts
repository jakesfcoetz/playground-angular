import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message?: string;

  changeAll(message: string) {
    this.message = 'parent says hi';
  }
  constructor() {}
}
