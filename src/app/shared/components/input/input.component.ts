import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "InputPer",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  @Input() public title: string = "";
  @Input() public isTouched: boolean = false;
  @Input() isPasswordInput: boolean = false;
  @Input() colorText: string = 'black';
  @Input() showBtnInfo: boolean = false;

  @Output("onShowPassword") showPasswordEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output("onClickInfo") infoEmiter: EventEmitter<any> = new EventEmitter<any>();

  showPassword: boolean = false;

  isSelected: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  focus(): void {
    this.isSelected = true;
  }

  blur(): void {
    this.isSelected = false;
  }

  onShowPassword (): void {
    this.showPassword = !this.showPassword;
    
    this.showPasswordEmit.emit(!this.showPassword);
  }

  onClickInfo(): void {
    this.infoEmiter.emit();
  }
}
