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
        },
        {
          id: '1.4',
          name: 'Сведения о заключении государственной экологической экспертизы',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '1.5',
          name: 'Сведения о составе документов, представленных для проведения экспертизы',
          childList: [],
          level: 2,
          isNewNode: false
        }
      ],
      level: 1,
      isNewNode: false
    },
    {
      id: '2',
      name: 'Сведения, содержащиеся в документах, представленных для проведения экспертизы проектной документации',
      childList: [
        {
          id: '2.1',
          name: 'Сведения об объекте капитального строительства, применительно к которому подготовлена проектная документация',
          childList: [
            {
              id: '2.1.1',
              name: 'Сведения о наименовании объекта капитального строительства, его почтовый (строительный) адрес или местоположение',
              childList: [],
              level: 3,
              isNewNode: false
            },
            {
              id: '2.1.2',
              name: 'Сведения о функциональном назначении объекта капитального строительства',
              childList: [],
              level: 3,
              isNewNode: false
            },
            {
              id: '2.1.3',
              name: 'Сведения о технико-экономических показателях объекта капитального строительства',
              childList: [],
              level: 3,
              isNewNode: false
            },
          ],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.2',
          name: 'Сведения о зданиях (сооружениях), входящих в состав сложного объекта, применительно к которому подготовлена проектная документация',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.3',
          name: 'Сведения об источнике (источниках) и размере финансирования строительства, реконструкции, капитального ремонта объекта капитального строительства',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.4',
          name: 'Сведения о природных и техногенных условиях территории, на которой планируется осуществлять строительство, реконструкцию, капитальный ремонт объекта капитального строительства',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.5',
          name: 'Сведения о сметной стоимости строительства, реконструкции, капитального ремонта) объекта капитального строительства',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.6',
          name: 'Сведения об индивидуальных предпринимателях и (или) юридических лицах, подготовивших проектную документацию',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.7',
          name: 'Сведения об использовании при подготовке проектной документации проектной документации повторного использования, в том числе экономически эффективной проектной документации повторного использования',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.8',
          name: 'Сведения о задании застройщика (технического заказчика) на разработку проектной документации',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.9',
          name: 'Сведения о документации по планировке территории, о наличии разрешений на отклонение от предельных параметров разрешенного строительства, реконструкции объектов капитального строительства',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.10',
          name: 'Сведения о технических условиях подключения объекта капитального строительства к сетям инженерно-технического обеспечения',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '2.11',
          name: 'Иная представленная по усмотрению заявителя информация об основаниях, исходных данных для проектирования',
          childList: [],
          level: 2,
          isNewNode: false
        },
      ],
      level: 1,
      isNewNode: false
    },
    {
      id: '3',
      name: 'Сведения, содержащиеся в документах, представленных для проведения экспертизы результатов инженерных изысканий',
      childList: [
        {
          id: '3.1',
          name: 'Дата подготовки отчетной документации по результатам инженерных изысканий',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '3.2',
          name: 'Сведения о видах инженерных изысканий',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '3.3',
          name: 'Сведения о местоположении района (площадки, трассы) проведения инженерных изысканий',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '3.4',
          name: 'Сведения об индивидуальных предпринимателях и (или) юридических лицах, подготовивших технический отчет по результатам инженерных изысканий',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '3.5',
          name: 'Сведения о задании застройщика (технического заказчика) на выполнение инженерных изысканий',
          childList: [],
          level: 2,
          isNewNode: false
        },
        {
          id: '3.6',
          name: 'Сведения о программе инженерных изысканий',
          childList: [],
          level: 2,
          isNewNode: false
        },
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
            },
            {
              id: '4.1.4',
              name: 'Инженерно-геологические изыскания',
              childList: [],
              level: 3,
              isNewNode: false
            },
            {
              id: '4.1.5',
              name: 'Сведения об оперативных изменениях, внесенных заявителем в результаты инженерных изысканий в процессе проведения экспертизы',
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
          childList: [
            {
              id: '4.2.1',
              name: 'Состав проектной документации',
              childList: [],
              level: 3,
              isNewNode: false
            },
            {
              id: '4.2.2',
              name: 'Описание основных решений (мероприятий), принятых в проектной документации',
              childList: [
                {
                  id: '4.2.2.1',
                  name: 'Пояснительная записка',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.2',
                  name: 'Схема планировочной организации земельного участка',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.4',
                  name: 'Архитектурные решения',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.5',
                  name: 'Сведения об инженерном оборудовании, о сетях инженерно-технического обеспечения, перечень инженерно-технических мероприятий, содержание технологических решений',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.6',
                  name: 'Проект организации строительства',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.8',
                  name: 'Перечень мероприятий по охране окружающей среды',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.9',
                  name: 'Мероприятия по обеспечению пожарной безопасности',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.10',
                  name: 'Мероприятия по обеспечению доступа инвалидов',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.11',
                  name: 'Мероприятия по обеспечению соблюдения требований энергетической эффективности и требований оснащенности зданий, строений и сооружений приборами учета используемых энергетических ресурсов',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
                {
                  id: '4.2.2.12',
                  name: 'Требования к обеспечению безопасной эксплуатации объектов капитального строительства',
                  childList: [],
                  level: 4,
                  isNewNode: false
                },
              ],
              level: 3,
              isNewNode: false
            },
          ],
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

    const newNodeId = node.level === 1 ? `${nodeList.length +1}` : `${node.id.slice(0, node.id.lastIndexOf('.') + 1)}${nodeList.length +1}`;

    nodeList.push({
      id: newNodeId,
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

