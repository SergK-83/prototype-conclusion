import {Component} from '@angular/core';

@Component({
  selector:    'custom-tree-node',
  templateUrl: 'custom-tree-node.component.html',
})
export class CustomTreeNodeComponent {
  simplebarOptions = { autoHide: false, scrollbarMinSize: 100 };
}
