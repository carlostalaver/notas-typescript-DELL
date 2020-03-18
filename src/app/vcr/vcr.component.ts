import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vcr',
  templateUrl: './vcr.component.html',
  styleUrls: ['./vcr.component.css']
})
export class VcrComponent implements OnInit {
  @ViewChild('tpl', {static: true}) miTpl;

  constructor( private vcrService: ViewContainerRef) { }

  ngOnInit() {
    console.log('la referencia ', this.vcrService);
    this.vcrService.createEmbeddedView(this.miTpl);
  }

}
