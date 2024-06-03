export type TTask = {
    Id: number,
    TaskName: string,
    Description: string;
    isShowDescription?: boolean;
    TaskStatus: TStatus
    id?: string
}

export type TStatus = {
    Id: number,
    Status: string
}