import { Component } from '@angular/core';

import { JualPage } from '../jual/jual';
import { ProfilePage } from '../profile/profile';
import { BeliPage } from '../beli/beli';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = JualPage;
  tab2Root: any = BeliPage;
  tab3Root: any = ProfilePage;

  constructor() {

  }
}
