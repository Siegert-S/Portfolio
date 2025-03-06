import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import * as AOS from 'aos';
// const AOS = require('aos');
// import 'aos/dist/aos.css';

// AOS.init();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
