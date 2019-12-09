declare interface NodeItem {
  id: string;
  name: string;
  childList: NodeItem[];
  level: number;
  isNewNode: boolean;
  editMode?: boolean;
  isExpanded?: boolean;
}
