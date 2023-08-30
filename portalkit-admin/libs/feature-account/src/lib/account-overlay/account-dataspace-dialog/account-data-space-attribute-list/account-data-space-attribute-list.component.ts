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
  editCache: { [key: number]: { edit: boolean; data: DataSpaceAttribute } } = {};

  ngOnInit() {
    this.updateEditCache();
  }

  addRow(): void {
    const newId = this.i;
    this.attributes = [
      ...this.attributes,
      {
        id: newId,
        name: ``,
        valueAsString: ``,
        value: '',
        type: ''
      }
    ];
    this.i++;
    this.updateEditCache();
    this.startEdit(newId);
  }

  deleteRow(id: number): void {
    this.attributes = this.attributes.filter(d => d.id !== id);
    this.updateEditCache();
  }

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.attributes.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.attributes[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
    const index = this.attributes.findIndex(item => item.id === id);
    Object.assign(this.attributes[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.attributes.forEach(item => {
      this.editCache[item.id as number] = {
        edit: false,
        data: { ...item }
      };
    });
    this.i = this.attributes[this.attributes.length -1].id;
  }
}
