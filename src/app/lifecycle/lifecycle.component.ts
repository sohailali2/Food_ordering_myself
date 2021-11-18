import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  @ViewChild("afterView", { read: ElementRef })
  afterView!: ElementRef;
  @Input()
  data!: string;
  show= false;
  constructor(private renderer: Renderer2) { }
  content?: string;
  ngOnInit(): void {
    this.content = "Welcome to lifecycles";
  }
  
  ngAfterViewInit() {
    this.renderer.setStyle(this.afterView.nativeElement, 'color', 'black');
  }
  ngOnDestroy() {
    console.log("hiii!");
  }
  displayOrUndisplay()
  {
    this.show = !this.show;
    if (this.show)
    {
      // document.getElementById("button").innerHTML = "Hide Content";
    }
    else
    {
      // document.getElementById("button").innerHTML = "Show Content";
    }
  }


}
