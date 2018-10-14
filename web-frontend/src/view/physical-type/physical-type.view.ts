import {IPhysicalType} from "../../../../shared-type/dist/physical-type/physical-type.interface";

export class PhysicalTypeView
{
    constructor(){}

    displayTypes(): Array<IPhysicalType> {
        const types:Array<IPhysicalType> = [];
        types.push({name:'temperature', symbol:'C'});

        return types;
    }
}