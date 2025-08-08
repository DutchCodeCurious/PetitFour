import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [    MatSidenavModule,
    RouterModule, 
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  MatToolbarModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {

}
