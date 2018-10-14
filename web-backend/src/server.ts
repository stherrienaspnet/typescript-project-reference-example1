import {IPhysicalTypeService, PhysicalTypeService} from "../../shared-lib/dist/physical-type/physical-type.service";

export class Server
{
    private _service: IPhysicalTypeService;

    constructor()
    {
        this._service = new PhysicalTypeService();
    }

    printType(){
        console.log(this._service.getAll());
    }
}
