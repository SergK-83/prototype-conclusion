import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector:    'custom-tree-node',
  templateUrl: 'custom-tree-node.component.html',
})
export class CustomTreeNodeComponent {

  @Input() node: NodeItem;

  @Input() nodeList: NodeItem[];

  @Output() createNode = new EventEmitter();

  @Output() createChildNode = new EventEmitter();

  @Output() removeNode = new EventEmitter();

  get treeLevel(): number {
    if (!this.node) {
      return 1;
    }

    return (this.node.id || '').split('.').length;
  }

  saveNode() {
    this.node.editMode = false;
    this.node.isNewNode = false;
  }

  cancelEditNode() {
    this.node.editMode = false;
  }

}
