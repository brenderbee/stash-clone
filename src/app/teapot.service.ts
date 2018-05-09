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
    return this.teapots;
  }

  getTeapotById(teapotID: string){
    console.log("this is getTeapotByID in the service: "+ teapotID)
    return this.database.object('teapots/' + teapotID);
  }
}
