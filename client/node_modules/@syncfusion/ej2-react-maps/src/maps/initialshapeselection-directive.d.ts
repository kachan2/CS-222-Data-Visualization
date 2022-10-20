import { ComplexBase } from '@syncfusion/ej2-react-base';
import { InitialShapeSelectionSettingsModel } from '@syncfusion/ej2-maps';
/**
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <initialShapeSelectionsDirective>
 * <initialShapeSelectionDirective></initialShapeSelectionDirective>
 * </initialShapeSelectionsDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
export declare class InitialShapeSelectionDirective extends ComplexBase<InitialShapeSelectionSettingsModel & {
    children?: React.ReactNode;
}, InitialShapeSelectionSettingsModel> {
    static moduleName: string;
}
export declare class InitialShapeSelectionsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
