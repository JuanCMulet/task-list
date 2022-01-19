import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  currentTime: Date = new Date;
  formatedTime: string = "";

  constructor() { }

  ngOnInit(): void {
    this.updateClock();
  }

  updateClock(): void {
    setInterval(() => {
      this.currentTime = new Date();
      this.formatedTime = this.currentTime.getHours() + ':' +
                         (this.currentTime.getMinutes() < 10 ? "0": "") + 
                          this.currentTime.getMinutes() + ':' +
                         (this.currentTime.getSeconds() < 10 ? "0": "") + 
                          this.currentTime.getSeconds() + "  " +
                         (this.currentTime.getDate() < 10 ? "0": "") +
                          this.currentTime.getDate() + "/" +
                         (this.currentTime.getMonth() < 10 ? "0": "") + 
                         (this.currentTime.getMonth() + 1) + "/" +
                          this.currentTime.getFullYear();
  }, 1000);
  }

}
