import { APP_INITIALIZER } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import * as arrowLeftSvg from 'icons/arrow-left_cc.svg';
import * as chevronDownSvg from 'icons/chevron-down_cc.svg';

const icons = {
    arrowLeft: `${arrowLeftSvg.default}`,
    chevronDown: `${chevronDownSvg.default}`,

    // addCircle: require('!!raw-loader!../../../src/assets/img/add-circle-outline_cc.svg')
    //     .default,
    // bell: require('!!raw-loader!../../../src/assets/img/bell.svg').default,
    // block: require('!!raw-loader!../../../src/assets/img/block_cc.svg').default,
    // calendar: require('!!raw-loader!../../../src/assets/img/dropdown-calendar-plain.svg')
    //     .default,
    // checkCircle: require('!!raw-loader!../../../src/assets/img/check-circle.svg')
    //     .default,
    // chevronDown: require('!!raw-loader!../../../../assets/img/chevron-down_cc.svg').default,
    // close: require('!!raw-loader!../../../src/assets/img/icon-close-plain.svg')
    //     .default,
    // coinEuro: require('!!raw-loader!../../../src/assets/img/coin-euro_cc.svg')
    //     .default,
    // delete: require('!!raw-loader!../../../src/assets/img/icon-delete_cc.svg')
    //     .default,
    // discount: require('!!raw-loader!../../../src/assets/img/discount_cc.svg')
    //     .default,
    // document: require('!!raw-loader!../../../src/assets/img/document_cc.svg')
    //     .default,
    // group: require('!!raw-loader!../../../src/assets/img/group_cc.svg').default,
    // hourglassTop: require('!!raw-loader!../../../src/assets/img/hourglass-top_cc.svg')
    //     .default,
    // house: require('!!raw-loader!../../../src/assets/img/house.svg').default,
    // iconArrowDown: require('!!raw-loader!../../../src/assets/img/icon-arrow-down.svg')
    //     .default,
    // iconArrowUp: require('!!raw-loader!../../../src/assets/img/icon-arrow-up.svg')
    //     .default,
    // iconBarcode: require('!!raw-loader!../../../src/assets/img/icon-barcode_cc.svg')
    //     .default,
    // iconBlock: require('!!raw-loader!../../../src/assets/img/icon-block_cc.svg')
    //     .default,
    // iconBusinessCenter: require('!!raw-loader!../../../src/assets/img/icon-business-center_cc.svg')
    //     .default,
    // iconCheck: require('!!raw-loader!../../../src/assets/img/check-green.svg')
    //     .default,
    // iconCreditCard: require('!!raw-loader!../../../src/assets/img/credit-card_cc.svg')
    //     .default,
    // iconDownload: require('!!raw-loader!../../../src/assets/img/icon-download_cc.svg')
    //     .default,
    // iconEdit: require('!!raw-loader!../../../src/assets/img/icon-edit_cc.svg')
    //     .default,
    // iconEmail: require('!!raw-loader!../../../src/assets/img/email_cc.svg')
    //     .default,
    // iconExport: require('!!raw-loader!../../../src/assets/img/icon-export_cc.svg')
    //     .default,
    // iconEye: require('!!raw-loader!../../../src/assets/img/eye_cc.svg').default,
    // iconInfo: require('!!raw-loader!../../../src/assets/img/icon-info_cc.svg')
    //     .default,
    // iconLoading: require('!!raw-loader!../../../src/assets/img/icon-loading_cc.svg')
    //     .default,
    // iconLocation: require('!!raw-loader!../../../src/assets/img/location_cc.svg')
    //     .default,
    // iconPhoneThin: require('!!raw-loader!../../../src/assets/img/phone-thin_cc.svg')
    //     .default,
    // iconPiePiece: require('!!raw-loader!../../../src/assets/img/pie-piece_cc.svg')
    //     .default,
    // iconSettingsEmpty: require('!!raw-loader!../../../src/assets/img/settings-empty_cc.svg')
    //     .default,
    // iconShape: require('!!raw-loader!../../../src/assets/img/icon-shape_cc.svg')
    //     .default,
    // iconSwap: require('!!raw-loader!../../../src/assets/img/swap-horiz.svg')
    //     .default,
    // iconTrash: require('!!raw-loader!../../../src/assets/img/trash_cc.svg')
    //     .default,
    // iconValidationErrorFull: require('!!raw-loader!../../../src/assets/img/icon-validation-error-full.svg')
    //     .default,
    // iconWarning: require('!!raw-loader!../../../src/assets/img/icon-warning_cc.svg')
    //     .default,
    // illustrationDocumentAutomation: require('!!raw-loader!../../../src/assets/img/illustration-s-doc-automation.svg')
    //     .default,
    // illustrationDocumentCheck: require('!!raw-loader!../../../src/assets/img/illustration-s-doc-check.svg')
    //     .default,
    // noDocuments: require('!!raw-loader!../../../src/assets/img/dashed-document.svg')
    //     .default,
    // noInboxNotification: require('!!raw-loader!../../../src/assets/img/no-inbox-notifications.svg')
    //     .default,
    // noNotification: require('!!raw-loader!../../../src/assets/img/no-notifications.svg')
    //     .default,
    // people: require('!!raw-loader!../../../src/assets/img/128_menu_Buyer_fornitori_cc.svg')
    //     .default,
    // powerOff: require('!!raw-loader!../../../src/assets/img/power-off.svg')
    //     .default,
    // removeFile: require('!!raw-loader!../../../src/assets/img/reject_cc.svg')
    //     .default,
    // time: require('!!raw-loader!../../../src/assets/img/time.svg').default,
};

export const iconNames = Object.keys(icons) as Array<IconNames>;

export type IconNames = keyof typeof icons;

export const brIconProvider = {
    deps: [SvgIconRegistryService],
    multi: true,
    provide: APP_INITIALIZER,
    useFactory: (iconRegistryService: SvgIconRegistryService) => (): void => {
        for (const iconName of iconNames) {
            iconRegistryService.addSvg(iconName, icons[iconName]);
        }
    },
};
