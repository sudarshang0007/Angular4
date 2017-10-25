import {Student} from '../shared/student';
import {Component, OnInit, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges {

  // Accept input from parent Component
  @Input() rating: number;
  starWidth: number;
  // send Data to Parent Component using EventEmitter<?>
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();
  @Output() out: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  /** this method is declared in interface OnChanges */

  ngOnChanges(): void {
    this.starWidth = this.rating * 85 / 5;
  }

  /** Event Emmitter example */
  onClick() {
    const student = new Student();
    student.id = 10;
    student.name = 'sudarshan';
    console.log('inside child');
    this.notify.emit(student);
  }

  /** On Mouse Over Event */
  onMouseOver() {
   this.out.emit('Mouse Hovered');
  }

}


