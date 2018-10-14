import {IPhysicalType} from "../../../../shared-type/dist/physical-type/physical-type.interface";

export class PhysicalTypeView
{
    private _types:Array<IPhysicalType>;

    constructor(){
        this.loadTypes();
    }

    loadTypes(): void {
        this._types = [];
        this._types.push({name:'temperature', symbol:'C'});
    }

    displayType(){
        console.log(this._types);
    }
}