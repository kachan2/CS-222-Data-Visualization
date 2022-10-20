import { ComplexBase } from '@syncfusion/ej2-react-base';
import { LayerSettingsModel } from '@syncfusion/ej2-maps';
/**
 * `LayersDirective` directive represent a layers of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective></LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
export declare class LayerDirective extends ComplexBase<LayerSettingsModel & {
    children?: React.ReactNode;
}, LayerSettingsModel> {
    static moduleName: string;
}
export declare class LayersDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
