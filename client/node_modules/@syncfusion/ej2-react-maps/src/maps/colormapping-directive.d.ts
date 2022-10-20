import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ColorMappingSettingsModel } from '@syncfusion/ej2-maps';
/**
 * `ColorMappingDirective` directive to configure the color mapping of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <BubblesDirective>
 * <ColorMappingsDirective>
 * <ColorMappingDirective></ColorMappingDirective>
 * </ColorMappingsDirective>
 * </BubblesDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
export declare class ColorMappingDirective extends ComplexBase<ColorMappingSettingsModel & {
    children?: React.ReactNode;
}, ColorMappingSettingsModel> {
    static moduleName: string;
}
export declare class ColorMappingsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
