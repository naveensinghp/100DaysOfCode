import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task:Task
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() onToggleRemainder:EventEmitter<Task> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(task){
    this.onDeleteTask.emit(task)
  }
  onToggle(task){
    this.onToggleRemainder.emit(task)
  }
}
