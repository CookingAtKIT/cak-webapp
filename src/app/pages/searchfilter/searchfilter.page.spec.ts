import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchfilterPage } from './searchfilter.page';

describe('SearchfilterPage', () => {
  let component: SearchfilterPage;
  let fixture: ComponentFixture<SearchfilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchfilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
