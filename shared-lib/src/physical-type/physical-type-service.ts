import {IPhysicalType} from "../../../shared-type/dist/src/physical-type/physical-type";

export interface IPhysicalTypeService
{
    getAll(): Array<IPhysicalType>
}

export class PhysicalTypeService implements IPhysicalTypeService
{
    getAll(): Array<IPhysicalType>
    {
        return this.getFakeData();
    }

    private getFakeData(): Array<IPhysicalType>
    {
        const types: Array<IPhysicalType> = [
            {name: 'temperature', symbol: 'C'}, {name: 'Weight', symbol: 'Kg'}
        ];

        return types;
    }
}