import { Component, ElementRef, viewChild } from '@angular/core';
import { AboutMe } from './sections/about-me/about-me';
import { Hero } from './sections/hero/hero';
import { NavBar } from './components/shared/nav-bar/nav-bar';
import { NavDrawer } from './components/shared/nav-bar/components/nav-drawer/nav-drawer';
import { Projects } from './sections/projects/projects';
import { Experience } from './sections/experience/experience';
import { Education } from './sections/education/education';
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavBar, Hero, AboutMe, NavDrawer, Projects, Experience, Education, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private drawerChk = viewChild.required<ElementRef<HTMLInputElement>>('drawerChk');

  closeDrawer() {
    this.drawerChk().nativeElement.checked = false;
  }
}
