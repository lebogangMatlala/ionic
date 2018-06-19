import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InstallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-install',
  templateUrl: 'install.html',
})
export class InstallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(InstallPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstallPage');
  }

}
