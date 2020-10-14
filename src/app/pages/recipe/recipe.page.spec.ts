import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipePage } from './recipe.page';

describe('RecipePage', () => {
  let component: RecipePage;
  let fixture: ComponentFixture<RecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
