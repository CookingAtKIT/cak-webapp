import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomescreenPage } from './homescreen.page';

describe('HomescreenPage', () => {
  let component: HomescreenPage;
  let fixture: ComponentFixture<HomescreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomescreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomescreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
