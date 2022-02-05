import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';


@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  getHello(){
    return this.httpService.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
