import { ICommandService, Plugin } from "@univerjs/core";
import { ComponentManager, IMenuService } from "@univerjs/ui";
import { Inject, Injector } from "@wendellhu/redi";
import { OrganizationSingle } from "@univerjs/icons";
import {
  AddWorkSheetEditPermissionCommand,
  DeleteWorkSheetEditPermissionCommand,
  ToggleWorkbookEditPermissionCommand,
} from "./commands";
import {
  AddWorksheetEditMenu,
  DeleteWorksheetEditMenu,
  TogglePermissionMenu,
  ToggleWorkbookEditMenu,
} from "./toggle-menu";

class TogglePermissionPlugin extends Plugin {
  static override pluginName = "toggle-permission-plugin";
  constructor(
    _config: null,
    // inject injector, required
    @Inject(Injector) override readonly _injector: Injector,
    // inject menu service, to add toolbar button
    @Inject(IMenuService) private menuService: IMenuService,
    // inject command service, to register command handler
    @Inject(ICommandService) private readonly commandService: ICommandService,
    // inject component manager, to register icon component
    @Inject(ComponentManager)
    private readonly componentManager: ComponentManager
  ) {
    super();
  }

  onStarting() {
    // register icon component
    this.componentManager.register("Organization", OrganizationSingle);

    [
      TogglePermissionMenu,
      ToggleWorkbookEditMenu,
      AddWorksheetEditMenu,
      DeleteWorksheetEditMenu,
    ].forEach((menuItem) => {
      this.disposeWithMe(this.menuService.addMenuItem(menuItem, {}));
    });

    [
      ToggleWorkbookEditPermissionCommand,
      AddWorkSheetEditPermissionCommand,
      DeleteWorkSheetEditPermissionCommand
    ].forEach((command) => {
      this.commandService.registerCommand(command);
    });
  }
}

export default TogglePermissionPlugin;
