import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public user_name:string= "Reinaldo Costa";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somadoisnumeros():void {
    alert(5+10);
  }

  ionViewDidLoad() {
    //this.somadoisnumeros();
  }

}
