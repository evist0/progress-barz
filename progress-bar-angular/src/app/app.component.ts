import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {ProgressBarComponent} from './components/progress-bar.component';
import {fromEvent, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-progress-bar color="white"></app-progress-bar>
    <app-block color="red"></app-block>
    <app-block color="green"></app-block>
    <app-block color="blue"></app-block>
  `
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(ProgressBarComponent) pb: ProgressBarComponent;

  subscription: Subscription;

  ngAfterViewInit(): void {
    this.pb.maxValue = document.body.scrollHeight - document.documentElement.clientHeight;

    const handleScroll = () => {
      this.pb.value = window.pageYOffset;
    };

    fromEvent(document, 'scroll').subscribe(handleScroll);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
