import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  public page: string = 'board';
}
