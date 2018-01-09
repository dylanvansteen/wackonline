import { OverviewModelResponse, Entity, Filters } from '@services/contract';


export interface LocationModel extends Entity {
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
}

// tslint:disable-next-line:no-empty-interface
export interface LocationOverviewFilters extends Filters {
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
