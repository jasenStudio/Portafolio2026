import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { AboutMe } from '../../sections/about-me/about-me';
import { Projects } from '../../sections/projects/projects';
import { Experience } from '../../sections/experience/experience';
import { Education } from '../../sections/education/education';
import { Footer } from '../../components/shared/footer/footer';

@Component({
  selector: 'app-porfolio-page',
  imports: [Hero, AboutMe, Projects, Experience, Education],
  templateUrl: './porfolio-page.html',
  styleUrl: './porfolio-page.css',
})
export class PorfolioPage {}
