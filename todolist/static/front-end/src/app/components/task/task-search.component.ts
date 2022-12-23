import {Component, Input} from '@angular/core';

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss']
})
export class TaskSearchComponent {
    @Input() class: string | undefined;
    @Input() placeholder: string | undefined;
}
