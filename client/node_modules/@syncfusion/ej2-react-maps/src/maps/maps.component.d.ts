import * as React from 'react';
import { Maps, MapsModel } from '@syncfusion/ej2-maps';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * Represents react Maps Component
 * ```tsx
 * <MapsComponent></MapsComponent>
 * ```
 */
export declare class MapsComponent extends Maps {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<MapsModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    directivekeys: {
        [key: string]: Object;
    };
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<MapsModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    portals: any;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
