import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
} from '@angular/core';
import { extend } from 'angular-three';
import { NgtcPhysics } from 'angular-three-cannon';
import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  PointLight,
} from 'three';
import { FloatingCube } from './floating-cube';
import { BoundaryPlane } from './plane';
import { PhysicsState } from './state';

extend({ AmbientLight, BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, PointLight });

@Component({
  selector: 'app-scene-graph',
  template: `
    <ngt-ambient-light [intensity]="0.8" />
    <ngt-point-light [position]="[10, 10, 10]" [intensity]="1.2 * Math.PI" [decay]="0" />
    <ngt-point-light [position]="[-10, -10, -5]" [intensity]="0.6 * Math.PI" [decay]="0" />

    <ngtc-physics [options]="{ gravity: state.gravity() }">
      <app-boundary-plane [position]="[0, -3, 0]" [rotation]="[-Math.PI / 2, 0, 0]" />
      <app-boundary-plane [position]="[0, 3, 0]" [rotation]="[Math.PI / 2, 0, 0]" />
      <app-boundary-plane [position]="[-5, 0, 0]" [rotation]="[0, Math.PI / 2, 0]" />
      <app-boundary-plane [position]="[5, 0, 0]" [rotation]="[0, -Math.PI / 2, 0]" />
      <app-boundary-plane [position]="[0, 0, -3]" />

      <app-floating-cube [position]="[-1.5, 1.5, 0]" [color]="colors().primary" [scale]="1.1" />
      <app-floating-cube [position]="[1.5, 0.5, 0.5]" [color]="colors().secondary" [scale]="0.85" />
      <app-floating-cube [position]="[0, 2.5, -0.5]" [color]="colors().accent" [scale]="0.65" />
      <app-floating-cube [position]="[-2.5, -1, 1]" [color]="colors().secondary" [scale]="0.75" />
    </ngtc-physics>
  `,
  imports: [FloatingCube, BoundaryPlane, NgtcPhysics],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {
  protected Math = Math;
  protected state = inject(PhysicsState);
  protected colors = signal({
    primary: '#6366f1',
    secondary: '#a855f7',
    accent: '#ec4899',
  });

  constructor() {
    afterNextRender(() => {
      this.colors.set({
        primary: this.getCssColor('--color-primary'),
        secondary: this.getCssColor('--color-secondary'),
        accent: this.getCssColor('--color-accent'),
      });
    });
  }

  private getCssColor(variable: string): string {
    const el = document.createElement('div');
    el.style.backgroundColor = `var(${variable})`;
    el.style.display = 'none';
    document.body.appendChild(el);
    const color = getComputedStyle(el).backgroundColor;
    document.body.removeChild(el);
    return color || '#6366f1';
  }
}
