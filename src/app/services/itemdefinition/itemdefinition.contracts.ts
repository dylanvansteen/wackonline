import { Entity, OverviewModelResponse, Filters } from '@services/contract';

export interface ItemDefinitionModel extends Entity {
    number: string;
    name: string;
    type: ItemDefinitionType;
    code: string;
    // image: Buffer;
}

// tslint:disable-next-line:no-empty-interface
export interface ItemDefinitionOverviewFilters extends Filters { }

export enum ItemDefinitionType {
    Unknown = 'Unknown',
    Tray = 'Tray',
    Box = 'Box',
    Interior = 'Interior',
    Container = 'Container',
    LoadCarrier = 'LoadCarrier',
    Crate = 'Crate',
    Pallet = 'Pallet',
    Lockingplate = 'Lockingplate',
    Lid = 'Lid',
    Bulk = 'Bulk',
    Tote = 'Tote',
    Other = 'Other',
}

export interface ItemDefinitionOverviewModelResponse extends OverviewModelResponse {
    data: Array<ItemDefinitionModel>;
}
