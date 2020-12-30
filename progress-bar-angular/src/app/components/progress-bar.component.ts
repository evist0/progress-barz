import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div style="width: 100%; height: 5px; position: fixed">
      <div
        [style]="{width: Math.trunc(this.value / this.maxValue * 100) + '%', height: '100%', backgroundColor: color, transition: 'width 200ms ease-in-out'}"></div>
    </div>
  `
})
export class ProgressBarComponent {
  @Input() color: string;
  @Input() value;
  @Input() maxValue;

  Math = Math;
}
