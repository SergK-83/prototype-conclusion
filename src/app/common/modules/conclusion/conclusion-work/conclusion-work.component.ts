import {Component, OnInit, Injectable} from '@angular/core';

@Component({
  selector: 'conclusion-work',
  templateUrl: './conclusion-work.component.html',
  styleUrls: ['./conclusion-work.component.scss']
})
export class ConclusionWorkComponent implements OnInit {

  curentNodeName: string;

  nodeName: string;

  treeNodes = [
    {
      id: '1.',
      name: 'Общие положения и сведения о заключении экспертизы',
      childList: [
        {
          id: '1.1.',
          name: 'Сведения об организации по проведению экспертизы',
          childList: null,
        },
        {
          id: '1.2.',
          name: 'Сведения о заявителе, застройщике, техническом заказчике',
          childList: null,
        },
        {
          id: '1.3.',
          name: 'Основания для проведения экспертизы',
          childList: null,
        }
      ]
    },
    {
      id: '4.',
      name: 'Описание рассмотренной документации (материалов)',
      childList: [
        {
          id: '4.1.',
          name: 'Описание результатов инженерных изысканий',
          childList: [
            {
              id: '4.1.1.',
              name: 'Состав отчетных материалов о результатах инженерных изысканий',
              childList: null,
            },
            {
              id: '4.1.2.',
              name: 'Сведения о методах выполнения инженерных изысканий',
              childList: null,
            },
            {
              id: '4.1.3.',
              name: 'Инженерно-геодезические изыскания',
              childList: null,
            }
          ]
        },
        {
          id: '4.2.',
          name: 'Сведения о заявителе, застройщике, техническом заказчике',
          childList: null,
        },
        {
          id: '4.3.',
          name: 'Основания для проведения экспертизы',
          childList: null,
        }
      ]
    },
    {
      id: '5.',
      name: 'Раздел без вложенных пунктов',
      childList: null,
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

}

