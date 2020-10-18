import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllergiesPage } from './allergies.page';

describe('AllergiesPage', () => {
  let component: AllergiesPage;
  let fixture: ComponentFixture<AllergiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllergiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
