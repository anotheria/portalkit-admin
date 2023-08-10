import {Component, ElementRef, Input} from "@angular/core";
import {DataSpaceAttribute} from "../../../account-page/account-page-data/account.types";

@Component({
  selector: "pk-account-data-space-attribute-list",
  templateUrl: "./account-data-space-attribute-list.component.html",
  styleUrls: ["./account-data-space-attribute-list.component.scss"],
})
export class AccountDataSpaceAttributeListComponent {
  @Input() attributes: DataSpaceAttribute[] = [];

  i = 0;
  editId?: string;

  startEdit(id: string | undefined, inpEl: HTMLElement): void {
    this.editId = id;
    setTimeout(() => inpEl.focus(),0);
  }

  stopEdit(): void {
    this.editId = undefined;
  }

  addRow(): void {
    this.attributes = [
      ...this.attributes,
      {
        id: `${this.i}`,
        name: `Attribute ${this.i}`,
        valueAsString: `value ${this.i}`,
        attrKey: 'attrKey',
        type: 'STRING'
      }
    ];
    this.i++;
  }

  deleteRow(id: string | undefined): void {
    this.attributes = this.attributes.filter(d => d.id !== id);
  }


  protected readonly setTimeout = setTimeout;
}
