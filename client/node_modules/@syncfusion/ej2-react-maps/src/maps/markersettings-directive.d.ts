import { ComplexBase } from '@syncfusion/ej2-react-base';
import { MarkerSettingsModel } from '@syncfusion/ej2-maps';
export interface MarkerSettingsDirTypecast {
    template?: string | Function | any;
    tooltipSettingsTemplate?: string | Function | any;
}
/**
 * `MarkerSettingsDirective` directive represent a marker settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <MarkersDirective>
 * <MarkerDirective></MarkerDirective>
 * </MarkersDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
export declare class MarkerDirective extends ComplexBase<MarkerSettingsModel | MarkerSettingsDirTypecast & {
    children?: React.ReactNode;
}, MarkerSettingsModel | MarkerSettingsDirTypecast> {
    static moduleName: string;
    static complexTemplate: Object;
}
export declare class MarkersDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
