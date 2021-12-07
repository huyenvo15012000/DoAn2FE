import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
import { MessagesserviceService } from './messagesservice.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesserviceService) {}

  getHeroes(): Observable<Hero[]> {
    console.log("Herooooo")
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
