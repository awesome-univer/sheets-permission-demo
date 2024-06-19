import {
  MenuGroup,
  MenuItemType,
  MenuPosition,
} from "@univerjs/ui";
import {
  AddWorkSheetEditPermissionCommand,
  DeleteWorkSheetEditPermissionCommand,
  TogglePermissionMenuId,
  ToggleWorkbookEditPermissionCommand,
} from "./commands";

export const TogglePermissionMenu = {
  id: TogglePermissionMenuId,
  icon: "Organization",
  tooltip: "toggle-permission",
  positions: [MenuPosition.TOOLBAR_START],
  group: MenuGroup.TOOLBAR_OTHERS,
  type: MenuItemType.SUBITEMS,
};

export const ToggleWorkbookEditMenu = {
  id: ToggleWorkbookEditPermissionCommand.id,
  type: MenuItemType.BUTTON,
  title: "toggle workbook edit",
  positions: [TogglePermissionMenuId],
};

export const AddWorksheetEditMenu = {
  id: AddWorkSheetEditPermissionCommand.id,
  type: MenuItemType.BUTTON,
  title: "add worksheet edit",
  positions: [TogglePermissionMenuId],
};

export const DeleteWorksheetEditMenu = {
  id: DeleteWorkSheetEditPermissionCommand.id,
  type: MenuItemType.BUTTON,
  title: "delete worksheet edit",
  positions: [TogglePermissionMenuId],
};
