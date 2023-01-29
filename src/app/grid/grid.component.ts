import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  // cubes: any[] = Array(64).fill({ isHovered: false });
  cubes: any[] = [];
  constructor() {
    for (let i = 0; i < 64; i++) {
      this.cubes.push({ isHovered: false });
    }
  }
  onMouseEnter(cube: { isHovered: boolean }) {
    cube.isHovered = !cube.isHovered;
  }

  // onMouseLeave(cube: { isHovered: boolean }) {
  //   cube.isHovered = false;
  // }
}
