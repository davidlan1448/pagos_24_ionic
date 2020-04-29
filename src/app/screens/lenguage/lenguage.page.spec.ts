import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LenguagePage } from './lenguage.page';

describe('LenguagePage', () => {
  let component: LenguagePage;
  let fixture: ComponentFixture<LenguagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LenguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
