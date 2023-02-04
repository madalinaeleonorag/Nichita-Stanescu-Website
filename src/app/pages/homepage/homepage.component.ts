import { Component } from '@angular/core';
import { GoogleService } from 'src/app/services/google.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  public reviews: Array<any> = [];

  constructor(private googleService: GoogleService) {}

  ngOnInit() {
    this.googleService.getPlaceReviews().subscribe((result) => {
      console.log(result);
      this.reviews = result.map(
        (item: any) =>
          (item = {
            user: item[0][1],
            date: item[1],
            comment: item[3].slice(0, 50) + '...',
            stars: new Array(item[4]),
          })
      );
    });
  }
}
