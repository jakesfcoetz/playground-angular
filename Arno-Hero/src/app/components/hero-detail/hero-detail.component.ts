import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {}
  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
