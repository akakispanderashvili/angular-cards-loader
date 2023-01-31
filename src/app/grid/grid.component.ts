import { Component } from '@angular/core';
import { Cube } from '../interfaces/cubes.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  cubes: Cube[] = [];
  constructor() {
    for (let i = 0; i < 64; i++) {
      this.cubes.push({ isHovered: false });
    }
  }
  onMouseEnter(cube: Cube) {
    cube.isHovered = !cube.isHovered;
  }
}
