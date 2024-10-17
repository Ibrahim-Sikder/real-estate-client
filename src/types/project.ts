export interface Project {
    _id: string;
    title: string;
    location: string;
    conceptImage: string;
    floorImage:string,

}

export interface ProjectData {
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    };
    data: {
        projects: Project[];
    };
}