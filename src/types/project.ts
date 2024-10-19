export interface Project {
    _id: string;
    title: string;
    location: string;
    conceptImages: string[]; // Array of image URLs
    floorImages: string[];

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

export type TProject = {
    _id:string,
    title: string;
    sub_title: string;
    project_type: string;
    project_address: string;
    land_area: string;
    storied: string;
    overview_Location: string[];
    short_description: string;
    overview_description: string;
    concept_Location?: string[];
    concept_description?: string;
    floor_title?: string;
    location?: string;
    floor_Location?: string[];
    floor_description?: string;
    map_Location?: string[];
    map_description?: string;
    floorImages?: string[];
    locationImgs?: string[];
    conceptImages?: string[];
    overviewImages?: string[];
    videoUrls?: string[];
    feature: boolean;
    category: string[];
    high_budget: number;
    low_budget: number;
    meta_title: string;
    meta_keywords: string[];
    meta_description: string;
    apartment_contains: string[];
    special_amenities: string[];
    common_features: string[];
    home_loan_partner: string[];
  };
  
   export type OverviewProps = {
    projectData: TProject;
  };