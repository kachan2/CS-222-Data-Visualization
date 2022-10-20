
import { world_map } from './world_map.ts';
import { population_density } from './data.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

const map = ReactDOM.render(
        <MapsComponent id="maps">
            <LayersDirective>
                <LayerDirective shapeData={world_map} shapeDataPath='name' shapePropertyPath='name' dataSource={population_density} shapeSettings={{
    colorValuePath: 'density',
    fill: '#E5E5E5',
    colorMapping: [
        {
            from: 0.00001, to: 100, color: 'rgb(153,174,214)'
        },
        {
            from: 100, to: 200, color: 'rgb(115,143,199)'
        },
        {
            from: 200, to: 300, color: 'rgb(77,112,184)'
        },
        {
            from: 300, to: 500, color: 'rgb(38,82,168)'
        },
        {
            from: 500, to: 19000, color: 'rgb(0,51,153)'
        }
    ]
}}>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
        , document.getElementById("maps"));

export default map;