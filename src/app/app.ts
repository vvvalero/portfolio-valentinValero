import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { ExperienceComponent } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, Hero, ExperienceComponent, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
