import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccountDataSpaceAttributeListComponent } from "./account-data-space-attribute-list.component";

describe("AccountDataSpaceAttributeListComponent", () => {
  let component: AccountDataSpaceAttributeListComponent;
  let fixture: ComponentFixture<AccountDataSpaceAttributeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDataSpaceAttributeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDataSpaceAttributeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
