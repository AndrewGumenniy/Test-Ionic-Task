import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrawingPagePage } from './drawing-page.page';

describe('DrawingPagePage', () => {
  let component: DrawingPagePage;
  let fixture: ComponentFixture<DrawingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrawingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
