import { signal } from '@angular/core';
import { createInjectable } from 'ngxtension/create-injectable';

export const PhysicsState = createInjectable(
  () => {
    const gravityY = signal(-9.8);

    return {
      gravityY: gravityY.asReadonly(),
      gravity: () => [0, gravityY(), 0] as [number, number, number],
      setGravityY: (value: number) => gravityY.set(value),
    };
  },
  { providedIn: 'scoped' },
);
