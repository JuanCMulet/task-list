import { Component, OnInit } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showAddTask:boolean = false;
  subscription?:Subscription;

  constructor(
    private uiService: UiService
    ) {
      this.subscription = this.uiService.onToggle().subscribe(
        value => {
          this.showAddTask = value
        }
      )
     }

  ngOnInit(): void {
  }

  resetAddTask() : void {
    this.uiService.resetAddTask()
  }

}
