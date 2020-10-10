import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomescreenPageRoutingModule } from './homescreen-routing.module';

import { HomescreenPage } from './homescreen.page';
import {AuthPageModule} from '../auth/auth.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomescreenPageRoutingModule,
        AuthPageModule
    ],
  declarations: [HomescreenPage]
})
export class HomescreenPageModule {}
