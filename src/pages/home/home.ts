console.log('this is home.ts');

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
        console.log('lets create a new pouch');
        try {
	    const pouch = new PouchDB('my pouch');
            console.log('pouch created!', pouch);
        } catch (err) {
            console.log('hmmm, that did not work');
        }
  }

}
