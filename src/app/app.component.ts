import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEPI-Final-Project';

  showHeaderAndFooter = false;

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`${title}`);
        }
      });





    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Define an array of routes where header and footer should be hidden
        const routesWithoutHeaderFooter = ['/dashboard', '/home', '/agenda', '/project', '/quiz', '/learning','/concepts', '/streaming'];

        // Check if the current URL matches any of the specified routes
        this.showHeaderAndFooter = !routesWithoutHeaderFooter.some(route =>
          event.urlAfterRedirects.startsWith(route)
        );
      }
    });
  }
}

