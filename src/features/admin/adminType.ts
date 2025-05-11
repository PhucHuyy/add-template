
export interface adminUser {
    id: string;
    email: string;
    username: string;
    roleNames: string[];
    status: string;

}



export interface UserStatsResponse {
    total: number;
    active: number;
    inactive: number;   
    pending: number;
}

export interface CountResponse {
  data: number;
}
