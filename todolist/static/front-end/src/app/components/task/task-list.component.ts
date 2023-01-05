import {Component, Inject, Input, OnInit} from '@angular/core';
import { Task } from 'src/app/interface/task';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  title!: string;
  selectedTask!: Task;
  tasks!: Task[];

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string,
              private router: Router) {
  }

  ngOnInit() {
    const url = this.baseUrl + "api/v1/task/";
    this.http.get<Task[]>(url).subscribe(result => {
      this.tasks = result;
    }, error => console.error(error));
  }

  onSelect(task: Task) {
    this.selectedTask = task;
    console.log("task with Id " + this.selectedTask.id + " has been selected.");
    this.router.navigate(["/task/", this.selectedTask.id]);
  }

  onEdit(task: Task) {
    this.selectedTask = task;
    console.log("task with Id " + this.selectedTask.id + " has been selected.");
    this.router.navigate(["/task/edit/", this.selectedTask.id]);
  }

  onDelete(task: Task) {
    this.selectedTask = task;
    if (confirm("Do you really want to delete this task?")) {
      const url = this.baseUrl + "api/v1/task/" + this.selectedTask.id;
      this.http
        .delete(url)
        .subscribe(result => {
          console.log("Task " + this.selectedTask.id + " has been deleted.");
          this.router.navigate(["home"]);
        }, error => console.log(error));
    }
  }
}
