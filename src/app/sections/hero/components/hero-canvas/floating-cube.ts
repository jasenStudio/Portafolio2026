import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import { NgtArgs } from 'angular-three';
import { box } from 'angular-three-cannon/body';
import type { Mesh } from 'three';

@Component({
  selector: 'app-floating-cube',
  template: `
    <ngt-mesh #mesh [position]="position()" [scale]="scale()">
      <ngt-box-geometry *args="[1, 1, 1]" />
      <ngt-mesh-standard-material
        [color]="color()"
        [roughness]="0.3"
        [metalness]="0.1"
      />
    </ngt-mesh>
  `,
  imports: [NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingCube {
  position = input.required<[number, number, number]>();
  color = input.required<string>();
  scale = input(1);

  private meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  constructor() {
    box(
      () => ({
        mass: 1,
        position: this.position(),
        args: [this.scale(), this.scale(), this.scale()],
        material: { restitution: 0.8 },
      }),
      this.meshRef,
    );
  }
}
