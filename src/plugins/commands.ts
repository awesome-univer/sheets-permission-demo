import {
  CommandType,
  ICommandService,
  IPermissionService,
  IUniverInstanceService,
  UniverInstanceType,
  Workbook,
} from "@univerjs/core";
import {
  AddWorksheetProtectionMutation,
  DeleteWorksheetProtectionMutation,
  WorkbookEditablePermission,
  WorksheetProtectionRuleModel,
  getSheetCommandTarget,
} from "@univerjs/sheets";
import { IAccessor } from "@wendellhu/redi";

export const TogglePermissionMenuId = "toggle-permission-menu";

export const ToggleWorkbookEditPermissionCommand = {
  type: CommandType.COMMAND,
  id: "sheet.command.toggle-workbook-edit-permission",
  async handler(accessor: IAccessor) {
    const permissionService = accessor.get(IPermissionService);
    const univerInstanceService = accessor.get(IUniverInstanceService);

    const workbook = univerInstanceService.getCurrentUnitForType<Workbook>(
      UniverInstanceType.UNIVER_SHEET
    );
    if (!workbook) {
      return;
    }

    const unitId = workbook.getUnitId();
    const workbookPermissionInstance = new WorkbookEditablePermission(unitId);
    let permissionPoint = permissionService.getPermissionPoint(
      workbookPermissionInstance.id
    );
    if (!permissionPoint) {
      permissionService.addPermissionPoint(workbookPermissionInstance);
      permissionPoint = workbookPermissionInstance;
    }
    permissionService.updatePermissionPoint(
      workbookPermissionInstance.id,
      !permissionPoint.value
    );
  },
};

export const AddWorkSheetEditPermissionCommand = {
  type: CommandType.COMMAND,
  id: "sheet.command.add-worksheet-edit-permission",
  async handler(accessor: IAccessor) {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const commandService = accessor.get(ICommandService);

    const target = getSheetCommandTarget(univerInstanceService);

    if (!target) {
      return;
    }

    const { unitId, subUnitId } = target;

    commandService.executeCommand(AddWorksheetProtectionMutation.id, {
      unitId,
      subUnitId,
      rule: {
        permissionId: "2sxcza1",
        name: "sheet",
        unitType: 2,
        unitId,
        subUnitId,
      },
    });
  },
};

export const DeleteWorkSheetEditPermissionCommand = {
  type: CommandType.COMMAND,
  id: "sheet.command.delete-worksheet-edit-permission",
  async handler(accessor: IAccessor) {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const commandService = accessor.get(ICommandService);
    const worksheetRuleModel = accessor.get(WorksheetProtectionRuleModel);

    const target = getSheetCommandTarget(univerInstanceService);

    if (!target) {
      return;
    }

    const { unitId, subUnitId } = target;

    if (worksheetRuleModel.getRule(unitId, subUnitId)) {
      commandService.executeCommand(DeleteWorksheetProtectionMutation.id, {
        unitId,
        subUnitId,
      });
    }
  },
};
