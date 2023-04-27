import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input() public urlImg!: string;
  @Input() public altImg:  string = '';

  public hasLoaded:boolean = false;

  ngOnInit(): void {
    if(!this.urlImg) throw new Error('URL is required!');
  }

  onLoad() {
    this.hasLoaded = true;
  }


}
