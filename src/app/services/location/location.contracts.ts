import { OverviewModelResponse } from '@services/contract';


export interface LocationModel {
    _id: string;
    name: string;
    number: string;
    type: number;
}

export interface LocationOverviewModelResponse extends OverviewModelResponse {
    data: Array<LocationModel>;
}
