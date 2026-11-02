import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'website-footer',
  imports: [RouterLink],
  templateUrl: './footer.html'
})
export class WebsiteFooter {
  protected readonly currentYear = new Date().getFullYear();
}
