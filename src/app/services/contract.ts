export interface OverviewModelResponse {
    total: number;
    limit: number;
    skip: number;
    data: Array<any>;
}

export interface Entity {
    _id: string;
    createdOn: Date;
    modifiedOn: Date;
}

export interface Filters {
    $limit: number;
    $skip?: number;
    $sort: string;
    $select?: string[];
}
