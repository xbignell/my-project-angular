import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.less'],
})

export class IntroductionComponent {

  constructor(private titleService: Title, private globals: Globals) {  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(this.globals.standardTitle + newTitle);
  }

}
