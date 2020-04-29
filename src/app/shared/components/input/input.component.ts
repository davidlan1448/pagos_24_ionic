import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "InputPer",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  @Input() public name: string = "";
  @Input() public title: string = "";
  @Input() public isTouched: boolean = false;
  @Input() isPasswordInput: boolean = false;
  @Output() onShowPassword: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  showPassword: boolean = false;

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

  onShowPasswordEmit () {
    this.showPassword = !this.showPassword;
    
    this.onShowPassword.emit(!this.showPassword);
  }
}
