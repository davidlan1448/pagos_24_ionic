import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "InputPer",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  @Input() public name: string = "";
  @Input() public title: string = "";
  @Input() public isTouched: boolean = false;

  isSelected: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  focus() {
    this.isSelected = true;
  }

  blur() {
    this.isSelected = false;
  }
}
