import {Component, OnInit, Injectable} from '@angular/core';

@Component({
  selector: 'conclusion-work',
  templateUrl: './conclusion-work.component.html',
  styleUrls: ['./conclusion-work.component.scss']
})
export class ConclusionWorkComponent implements OnInit {

  curentNodeName: string;

  nodeName: string;

  treeNodes: NodeItem[] = [
    {
      id: '1',
      name: 'Общие положения и сведения о заключении экспертизы',
      childList: [
        {
          id: '1.1',
          name: 'Сведения об организации по проведению экспертизы',
          childList: [],
        },
        {
          id: '1.2',
          name: 'Сведения о заявителе, застройщике, техническом заказчике',
          childList: [],
        },
        {
          id: '1.3',
          name: 'Основания для проведения экспертизы',
          childList: [],
        }
      ]
    },
    {
      id: '4',
      name: 'Описание рассмотренной документации (материалов)',
      childList: [
        {
          id: '4.1',
          name: 'Описание результатов инженерных изысканий',
          childList: [
            {
              id: '4.1.1',
              name: 'Состав отчетных материалов о результатах инженерных изысканий',
              childList: [],
            },
            {
              id: '4.1.2',
              name: 'Сведения о методах выполнения инженерных изысканий',
              childList: [],
            },
            {
              id: '4.1.3',
              name: 'Инженерно-геодезические изыскания',
              childList: [],
            }
          ]
        },
        {
          id: '4.2',
          name: 'Сведения о заявителе, застройщике, техническом заказчике',
          childList: [],
        },
        {
          id: '4.3',
          name: 'Основания для проведения экспертизы',
          childList: [],
        }
      ]
    },
    {
      id: '5',
      name: 'Раздел без вложенных пунктов',
      childList: [],
    }
  ];

  saveNewTreeNode() {
    this.treeNodes.push(
      {
        id: '7',
        name: this.nodeName,
        childList: null
      }
    );
    this.nodeName = '';

    console.log(this.treeNodes);
  }

  ngOnInit() {
    console.log(this.treeNodes);
  }

  createChildNode(node: NodeItem) {

    node.childList.push({
      id: `${node.id}.${node.childList.length + 1}`,
      name: null,
      childList: [],
      editMode: true,
    });

    node.isExpanded = true;
  }
}

