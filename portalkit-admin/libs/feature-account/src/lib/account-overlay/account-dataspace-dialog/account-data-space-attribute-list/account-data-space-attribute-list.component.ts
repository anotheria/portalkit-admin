import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {AttributeType, DataSpaceAttribute} from "../../../account-page/account-page-data/account.types";
import {AccountService} from "../../../account-page/account-page-data/account.service";

@Component({
  selector: "pk-account-data-space-attribute-list",
  templateUrl: "./account-data-space-attribute-list.component.html",
  styleUrls: ["./account-data-space-attribute-list.component.scss"],
})
export class AccountDataSpaceAttributeListComponent implements OnInit {
  @Input() attributes: DataSpaceAttribute[] = [];

  @Output() updateAttribute = new EventEmitter<DataSpaceAttribute>();
  @Output() deleteAttribute = new EventEmitter<DataSpaceAttribute>();

  i = 0;
  editCache: { [key: number]: { edit: boolean; data: DataSpaceAttribute } } = {};
  attributeTypeOptions: Array<{label: string, value: string}> = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.updateEditCache();
    this.attributeTypeOptions = Object.keys(AttributeType).map((key) => ({label: key, value: key}));
    if(this.attributes.length == 1 && !this.attributes[0].valueAsString) { // one attribute without value force attr edit
      this.startEdit(this.attributes[0].id)
    }
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
        type: null
      }
    ];
    this.updateEditCache();
    this.startEdit(newId);
    this.i++;
  }

  deleteRow(id: number): void {
    this.deleteAttribute.emit(this.attributes.find((attr) => attr.id === id));
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
    this.updateAttribute.emit(this.attributes[index]);
  }

  updateEditCache(): void {
    this.attributes.forEach(item => {
      this.editCache[item.id as number] = {
        edit: false,
        data: { ...item }
      };
    });
    this.i = this.attributes[this.attributes.length -1].id + 1;
  }
}
