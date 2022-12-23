import {Component, Inject} from '@angular/core';
import { Task } from 'src/app/interface/task';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {
  title!: string;
  task!: Task;
  form!: FormGroup;
  editMode!: boolean;

  constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        private fb: FormBuilder,
        @Inject('BASE_URL') private baseUrl: string) {

        this.task = <Task>{};

        this.createForm();

        const id = +this.activatedRoute.snapshot.params["id"];

        if(id) {
          this.editMode = true;

          const url = this.baseUrl + "api/v1/task/" + id;
          this.http.get<Task>(url).subscribe(result => {
            this.task = result;
            this.title = "Edit a Task - " + this.task.title;
            this.updateForm();
          }, error => console.error(error));
        } else {
          this.editMode = false;
          this.title = "Create a Task";
        }
  }

  createForm() {
      this.form = this.fb.group({
            title: ['', Validators.required],
            description: '',
            address: '',
            item: '',
            complete: false
      });
  }

  updateForm() {
      this.form.setValue({
          title: this.task.title,
          description: this.task.description || '',
          address: this.task.address || '',
          item: this.task.item || '',
          complete: this.task.complete || false
      });
  }

  onSubmit() {
      const tempTask = <Task>{};
      tempTask.title = this.form.value.title;
      tempTask.description = this.form.value.description;
      tempTask.address = this.form.value.address;
      tempTask.item = this.form.value.item;
      tempTask.complete = this.form.value.complete

      let url = this.baseUrl + "api/v1/task/";

      if (this.editMode) {
        tempTask.id = this.task.id;
        url += tempTask.id+ "/";
        this.http
          .put<Task>(url, tempTask)
          .subscribe(res => {
            this.task = res;
            console.log("Task " + this.task.id + " has been updated.");
            this.router.navigate(["home"]);
          }, error => console.log(error))
      } else {
        this.http
          .post<Task>(url, tempTask)
          .subscribe(res => {
            const task = res;
            console.log("Task " + task.id + " has been created.");
            this.router.navigate(["home"]);
          }, error => console.log(error))
      }
  }

  onBack() {
      this.router.navigate(["home"]);
  }

  getFormControl(name: string) {
      return this.form.get(name);
  }

  isValid(name: string) {
      var e = this.getFormControl(name);
      return e && e.valid;
  }

  isChanged(name: string) {
      var e = this.getFormControl(name);
      return e && (e.dirty || e.touched);
  }

  hasError(name: string) {
      var e = this.getFormControl(name);
      return e && (e.dirty || e.touched) && !e.valid;
  }

}
