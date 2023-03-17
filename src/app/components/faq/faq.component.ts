import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  constructor(private router: Router) {}

 redirectToFaq(): void {
    this.router.navigate(['/faq']);
  }
}
