import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-block',
  template: `
    <div [style]="{width: '100%', height: '100vh', backgroundColor: color}"></div>
  `
})
export class BlockComponent {
  @Input() color: string;
}
