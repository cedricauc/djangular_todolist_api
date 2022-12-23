import {HttpClient} from '@angular/common/http';
import {Component, Inject} from '@angular/core';
import {Task} from 'src/app/interface/task';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  task!: Task;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) {

    this.task = <Task>{};

    const id = +this.activatedRoute.snapshot.params["id"];
    console.log(id);
    if (id) {
      const url = this.baseUrl + "api/v1/task/" + id;

      this.http.get<Task>(url).subscribe(result => {
        this.task = result;
      }, error => console.error(error));
    } else {
      console.log("Invalid id: routing back to home...");
      this.router.navigate(["home"]);
    }

  }

  onEdit() {
    this.router.navigate(["task/edit", this.task.id]);
  }

  onDelete() {
    if (confirm("Do you really want to delete this task?")) {
      const url = this.baseUrl + "api/v1/task/" + this.task.id;
      this.http
        .delete(url)
        .subscribe(result => {
          console.log("Task " + this.task.id + " has been deleted.");
          this.router.navigate(["home"]);
        }, error => console.log(error));
    }
  }

}
