import {IPhysicalType} from "../../../../shared-type/dist/src/physical-type/physical-type";

export class PhysicalTypeView
{
    constructor(){}

    displayTypes(): Array<IPhysicalType> {
        const types:Array<IPhysicalType> = [];
        types.push({name:'temperature', symbol:'C'});

        return types;
    }
}