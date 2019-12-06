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
          level: 2
        },
        {
          id: '1.2',
          name: 'Сведения о заявителе, застройщике, техническом заказчике',
          childList: [],
          level: 2
        },
        {
          id: '1.3',
          name: 'Основания для проведения экспертизы',
          childList: [],
          level: 2
        }
      ],
      level: 1
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
              level: 3
            },
            {
              id: '4.1.2',
              name: 'Сведения о методах выполнения инженерных изысканий',
              childList: [],
              level: 3
            },
            {
              id: '4.1.3',
              name: 'Инженерно-геодезические изыскания',
              childList: [],
              level: 3
            }
          ],
          level: 2
        },
        {
          id: '4.2',
          name: 'Сведения о заявителе, застройщике, техническом заказчике',
          childList: [],
          level: 2
        },
        {
          id: '4.3',
          name: 'Основания для проведения экспертизы',
          childList: [],
          level: 2
        }
      ],
      level: 1
    },
    {
      id: '5',
      name: 'Раздел без вложенных пунктов',
      childList: [],
      level: 1
    }
  ];

  ngOnInit() {
  }

  createNode(nodeList: NodeItem[], node: NodeItem) {

    nodeList.push({
      id: node.id,
      name: null,
      childList: [],
      level: node.level,
      editMode: true,
    });

    console.log(nodeList);

  }

  createChildNode(node: NodeItem) {

    node.childList.push({
      id: `${node.id}.${node.childList.length + 1}`,
      name: null,
      childList: [],
      level: node.level + 1,
      editMode: true,
    });

    node.isExpanded = true;
  }
}

