import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';

import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TopbarComponent, SidebarComponent],
  exports:[TopbarComponent, SidebarComponent]
})
export class CoreModule { }
