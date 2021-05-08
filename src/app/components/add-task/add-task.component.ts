import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()
  showAddTask: boolean = true;
  text:string
  day:string
  remainder: boolean = false
  subscription:Subscription
  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please Enter Text');
      return
    }

    const newTask = {
      text: this.text,
      day:this.day,
      remainder:this.remainder
    }
    this.onAddTask.emit(newTask)
    this.text = '';
    this.day ='';
    this.remainder = false
  }

}
