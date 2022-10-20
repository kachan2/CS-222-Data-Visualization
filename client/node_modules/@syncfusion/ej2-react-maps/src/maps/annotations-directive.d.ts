import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AnnotationModel } from '@syncfusion/ej2-maps';
export interface AnnotationDirTypecast {
    content?: string | Function | any;
}
/**
 * `AnnotationsDirective` directive represent a annotation of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </MapsComponent>
 * ```
 */
export declare class AnnotationDirective extends ComplexBase<AnnotationModel | AnnotationDirTypecast & {
    children?: React.ReactNode;
}, AnnotationModel | AnnotationDirTypecast> {
    static moduleName: string;
}
export declare class AnnotationsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
