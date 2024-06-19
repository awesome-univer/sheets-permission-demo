import "./style.css";

import { LocaleType, Univer, UniverInstanceType, UserManagerService } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";

/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 * 
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
import { zhCN, enUS } from 'univer:locales'
import TogglePermissionPlugin from "./plugins/togglePermissionPlugin";

const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.EN_US,
    locales: {
        [LocaleType.ZH_CN]: zhCN,
        [LocaleType.EN_US]: enUS,
    },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
    container: 'app',
});

univer.registerPlugin(UniverDocsPlugin, {
    hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);

univer.registerPlugin(TogglePermissionPlugin)

const mockUser = {
    userID: 'azxcwex',
    name: 'test',
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==',
    anonymous: false,
    canBindAnonymous: false,
};

// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
    "id": "gyI0JO",
    "sheetOrder": [
        "RSfWjJFv4opmE1JaiRj80"
    ],
    "name": "",
    "appVersion": "0.1.11",
    "locale": "zhCN",
    "styles": {},
    "sheets": {
        "RSfWjJFv4opmE1JaiRj80": {
            "id": "RSfWjJFv4opmE1JaiRj80",
            "name": "测试",
            "tabColor": "",
            "hidden": 0,
            "rowCount": 30,
            "columnCount": 10,
            "zoomRatio": 1,
            "freeze": {
                "startRow": -1,
                "startColumn": -1,
                "ySplit": 0,
                "xSplit": 0
            },
            "scrollTop": 0,
            "scrollLeft": 0,
            "defaultColumnWidth": 73,
            "defaultRowHeight": 23,
            "mergeData": [],
            "cellData": {},
            "rowData": {},
            "columnData": {
                "0": {
                    "w": 125,
                    "hd": 0
                },
                "1": {
                    "w": 125,
                    "hd": 0
                },
                "2": {
                    "w": 125,
                    "hd": 0
                },
                "3": {
                    "w": 125,
                    "hd": 0
                },
                "4": {
                    "w": 125,
                    "hd": 0
                },
                "5": {
                    "w": 125,
                    "hd": 0
                },
                "6": {
                    "w": 125,
                    "hd": 0
                },
                "7": {
                    "w": 125,
                    "hd": 0
                },
                "8": {
                    "w": 125,
                    "hd": 0
                },
                "9": {
                    "w": 125,
                    "hd": 0
                }
            },
            "showGridlines": 1,
            "rowHeader": {
                "width": 46,
                "hidden": 0
            },
            "columnHeader": {
                "height": 20,
                "hidden": 0
            },
            "selections": [
                "A1"
            ],
            "rightToLeft": 0
        }
    },
    "resources": [
        {
            "name": "SHEET_DEFINED_NAME_PLUGIN",
            "data": ""
        }
    ]
}
);


const injector = univer.__getInjector();
const userManagerService = injector.get(UserManagerService);


setTimeout(() => {
    userManagerService.setCurrentUser(mockUser);
}, 2000)
