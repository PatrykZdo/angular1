import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../tasks/task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() closed = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancel(){
    this.closed.emit();
  }

  onSubmit(){
    this.tasksService.addTask({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDate}, this.userId);
    this.closed.emit();
  }
}
