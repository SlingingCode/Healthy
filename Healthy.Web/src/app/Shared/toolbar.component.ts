import { Component, OnInit, Output, Input, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSideNavigation = new EventEmitter<void>();
  @Input() titleText: string;
  @Input() matIcon: string;

  constructor() { }

  ngOnInit() {
    console.log(this.titleText);
  }

}
