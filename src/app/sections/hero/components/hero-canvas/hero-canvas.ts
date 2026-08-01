import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtCanvas } from 'angular-three/dom';
import { SceneGraph } from './scene';

@Component({
  selector: 'hero-canvas',
  template: `
    <ngt-canvas [gl]="{ alpha: true }" [camera]="{ position: [0, 0, 10], fov: 50 }">
      <app-scene-graph *canvasContent />
    </ngt-canvas>
  `,
  imports: [NgtCanvas, SceneGraph],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full h-full' },
})
export class HeroCanvas {}
