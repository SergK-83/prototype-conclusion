import {Component, OnInit, Injectable} from '@angular/core';

@Component({
  selector: 'conclusion-work',
  templateUrl: './conclusion-work.component.html',
  styleUrls: ['./conclusion-work.component.scss']
})
export class ConclusionWorkComponent implements OnInit {

  curentNodeName: string;

  nodeList: NodeItem[] = [
    {
      id: '1',
      name: 'Общие положения и сведения о заключении экспертизы',
      childList: [
        {
          id: '1.1',
          name: 'Сведения об организации по проведению экспертизы',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '1.2',
          name: 'Сведения о заявителе, застройщике, техническом заказчике',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '1.3',
          name: 'Основания для проведения экспертизы',
          childList: [],
          level: 2,
          isNewNode: false
        }
      ],
      level: 1,
      isNewNode: false
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
              level: 3,
              isNewNode: false
            },
            {
              id: '4.1.2',
              name: 'Сведения о методах выполнения инженерных изысканий',
              childList: [],
              level: 3,
              isNewNode: false
            },
            {
              id: '4.1.3',
              name: 'Инженерно-геодезические изыскания',
              childList: [],
              level: 3,
              isNewNode: false
            }
          ],
          level: 2,
          isNewNode: false
        },
        {
          id: '4.2',
          name: 'Сведения о заявителе, застройщике, техническом заказчике',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '4.3',
          name: 'Основания для проведения экспертизы',
          childList: [],
          level: 2,
          isNewNode: false
        }
      ],
      level: 1,
      isNewNode: false
    },
    {
      id: '5',
      name: 'Раздел без вложенных пунктов',
      childList: [],
      level: 1,
      isNewNode: false
    }
  ];

  ngOnInit() {
  }

  createNode(nodeList: NodeItem[], node: NodeItem) {

    nodeList.push({
      id: `${node.id}.${nodeList.length +1}`,
      name: null,
      childList: [],
      level: node.level,
      isNewNode: true,
      editMode: true,
    });
  }

  createChildNode(node: NodeItem) {

    node.childList.push({
      id: `${node.id}.${node.childList.length + 1}`,
      name: null,
      childList: [],
      level: node.level + 1,
      isNewNode: true,
      editMode: true,
    });

    node.isExpanded = true;
  }

  removeNode(nodeList: NodeItem[], node: NodeItem){

    const nodeIndex = nodeList.indexOf(node);

    nodeList.splice(nodeIndex, 1);
  }
}

