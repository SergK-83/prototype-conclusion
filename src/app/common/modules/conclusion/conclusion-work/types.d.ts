declare interface NodeItem {
  id: string;
  name: string;
  childList: NodeItem[];
  level: number;
  editMode?: boolean;
  isExpanded?: boolean;
}
