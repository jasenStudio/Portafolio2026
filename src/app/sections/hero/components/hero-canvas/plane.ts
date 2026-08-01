import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import { NgtArgs } from 'angular-three';
import { plane } from 'angular-three-cannon/body';
import * as THREE from 'three';

@Component({
  selector: 'app-boundary-plane',
  template: `
    <ngt-mesh #mesh [position]="position()" [rotation]="rotation()">
      <ngt-plane-geometry *args="[20, 20]" />
      <ngt-mesh-basic-material [transparent]="true" [opacity]="0" />
    </ngt-mesh>
  `,
  imports: [NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoundaryPlane {
  position = input.required<[number, number, number]>();
  rotation = input<[number, number, number]>([0, 0, 0]);

  private meshRef = viewChild.required<ElementRef<THREE.Mesh>>('mesh');

  constructor() {
    plane(
      () => ({
        mass: 0,
        position: this.position(),
        rotation: this.rotation(),
        args: [20, 20],
        material: { restitution: 0.8 },
      }),
      this.meshRef,
    );
  }
}
