import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import { Animation, AnimationController } from "@ionic/angular";

@Component({
  selector: "Language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"],
})
export class LanguageComponent implements OnInit {
  @ViewChild("language", { static: false }) languageDiv: any;
  @Output() onSelectLanguage = new EventEmitter<"en" | "es" | "pt">();

  constructor(private animationCtrl: AnimationController) {}

  async ngOnInit() {
    /* const animation: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector("#language"))
      .duration(500)
      .fromTo('height', '379px', '120px');

    animation.play().then(() => console.log("Finally")); */
  }

  /**
   * @description selecciona el codigo del lenguaje
   * @param language "en" | "es" | "pt"
   */
  public selectLanguage (language: "en" | "es" | "pt") {
    this.onSelectLanguage.emit(language);
  }
}
