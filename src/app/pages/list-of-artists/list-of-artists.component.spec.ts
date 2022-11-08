import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfArtistsComponent } from './list-of-artists.component';

describe('ListOfArtistsComponent', () => {
  let component: ListOfArtistsComponent;
  let fixture: ComponentFixture<ListOfArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfArtistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
