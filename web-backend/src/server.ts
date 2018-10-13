import {IPhysicalTypeService, PhysicalTypeService} from "../../shared-lib/dist/src/physical-type/physical-type-service";


export class Server
{
    private _service: IPhysicalTypeService;

    constructor()
    {
        this._service = new PhysicalTypeService();
    }
}

const server = new Server();

export default server;