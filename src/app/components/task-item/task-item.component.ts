import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  showAddTask:boolean = false;
  subscription?: Subscription;

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

  onDelete(task:Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task) {
    this.onToggleReminder.emit(task);
  }

}
