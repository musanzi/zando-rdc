import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION_LINKS } from '@web/domains/website/shared/data';

@Component({
  selector: 'website-header',
  imports: [MatButtonModule, MatIcon, RouterLink, RouterLinkActive],
  host: {
    '(window:scroll)': 'updateScrolledState()'
  },
  templateUrl: './header.html'
})
export class WebsiteHeader {
  protected isScrolled = signal(false);
  protected isMenuOpen = signal(false);

  protected links = NAVIGATION_LINKS;
  protected solidHeader = computed(() => this.isScrolled() || this.isMenuOpen());

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected navLinkClasses(active: boolean): string {
    if (!this.isScrolled()) {
      return active
        ? 'border-white text-white'
        : 'border-transparent text-white/80 hover:border-white/40 hover:text-white';
    }

    return active
      ? 'border-primary-500 text-on-surface'
      : 'border-transparent text-on-surface-variant hover:border-outline-variant hover:text-on-surface';
  }

  protected mobileNavLinkClasses(active: boolean): string {
    return active
      ? 'bg-primary-container text-primary'
      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface';
  }

  protected updateScrolledState(): void {
    this.isScrolled.set(window.scrollY > 0);
  }
}
