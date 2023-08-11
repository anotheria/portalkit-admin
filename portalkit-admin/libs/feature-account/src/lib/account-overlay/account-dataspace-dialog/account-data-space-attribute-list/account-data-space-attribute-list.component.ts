import {Component, Input, OnInit} from "@angular/core";
import {DataSpaceAttribute} from "../../../account-page/account-page-data/account.types";

@Component({
  selector: "pk-account-data-space-attribute-list",
  templateUrl: "./account-data-space-attribute-list.component.html",
  styleUrls: ["./account-data-space-attribute-list.component.scss"],
})
export class AccountDataSpaceAttributeListComponent implements OnInit {
  @Input() attributes: DataSpaceAttribute[] = [];

  i = 0;
  editCache: { [key: string]: { edit: boolean; data: DataSpaceAttribute } } = {};

  ngOnInit() {
    this.updateEditCache();
  }

  addRow(): void {
    const newId = `${this.i}`;
    this.attributes = [
      ...this.attributes,
      {
        id: newId,
        name: ``,
        valueAsString: ``,
        attrKey: '',
        type: ''
      }
    ];
    this.i++;
    this.updateEditCache();
    this.startEdit(newId);
  }

  deleteRow(id: string | undefined): void {
    this.attributes = this.attributes.filter(d => d.id !== id);
    this.updateEditCache();
  }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.attributes.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.attributes[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.attributes.findIndex(item => item.id === id);
    Object.assign(this.attributes[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.attributes.forEach(item => {
      this.editCache[item.id as string] = {
        edit: false,
        data: { ...item }
      };
    });
  }
}
