import { ComplexBase } from '@syncfusion/ej2-react-base';
import { BubbleSettingsModel } from '@syncfusion/ej2-maps';
export interface BubbleSettingsDirTypecast {
    tooltipSettingsTemplate?: string | Function | any;
}
/**
 * `BubblesDirective` directive represent a bubble settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <BubblesDirective>
 * <BubbleDirective></BubbleDirective>
 * </BubblesDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
export declare class BubbleDirective extends ComplexBase<BubbleSettingsModel | BubbleSettingsDirTypecast & {
    children?: React.ReactNode;
}, BubbleSettingsModel | BubbleSettingsDirTypecast> {
    static moduleName: string;
    static complexTemplate: Object;
}
export declare class BubblesDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
