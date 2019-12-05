declare interface NodeItem {
  id: string;
  name: string;
  childList?: NodeItem[];
  editMode?: boolean;
  isExpanded?: boolean;
}
