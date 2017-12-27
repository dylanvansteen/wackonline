import { OverviewModelResponse } from '@services/contract';


export interface LocationModel {
    _id: string;
    name: string;
    number: string;
    type: LocationType;
    GLN: string;
    telephone: string;
    emailaddress: string;
    addressLine: string;
    postalCode: string;
    city: string;
    country: string;
    createdOn: Date;
    modifiedOn: Date;
}

export interface LocationOverviewFilters {
    $limit: number;
    $skip?: number;
    $sort: string;
}

export interface LocationOverviewModelResponse extends OverviewModelResponse {
    data: Array<LocationModel>;
}


export enum LocationType {
    auction = 'Auction',
    customer = 'Customer',
    supplier = 'Supplier',
    carrier = 'Carrier'
}
