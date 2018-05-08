import { Injectable } from '@angular/core';
import { Teapot } from './models/teapot.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TeapotService {
  teapots: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.teapots = database.list('teapots');
   }

  getTeapots() {
    console.log("this is in the service.");
    return this.teapots;
  }

  getTeapotById(teapotID: string){
    return this.database.object('teapots/' + teapotID);
  }
}
