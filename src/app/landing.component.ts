import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  template: '<div style="padding: 10px">Home</div>',
})
export class LandingComponent {
  constructor(router: Router) {
    router.navigate(['land']);
  }
}