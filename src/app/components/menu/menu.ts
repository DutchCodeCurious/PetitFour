import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  route?: string; 
}

@Component({
  selector: 'app-menu',
  imports: [    
    MatSidenavModule,
    RouterModule, 
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTreeModule,
    MatToolbarModule, 
],
changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu {
  dataSource = Food_Book_Data;

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}

const Food_Book_Data: FoodNode[] = [
  {
    name: "FoodBook",
    children: [
      { name: "All Recipes", route: '/recipes/all' },
      { name: "Favorite Recipes" , route: '/recipes/favorite'},
      { name: "My Recipes", route: '/recipes/my' },
      { name: "Weekly Recipes", route: '/recipes/weekly' },
      { name: "Add Recipes", route: '/recipes/add' }
    ]
  }
]