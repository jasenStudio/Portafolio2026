import { Component, ElementRef, viewChild } from '@angular/core';

import { NavBar } from './shared/components/nav-bar/nav-bar';
import { NavDrawer } from './shared/components/nav-bar/components/nav-drawer/nav-drawer';

import { Footer } from './shared/components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavBar, NavDrawer, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private drawerChk = viewChild.required<ElementRef<HTMLInputElement>>('drawerChk');

  closeDrawer() {
    this.drawerChk().nativeElement.checked = false;
  }
}
