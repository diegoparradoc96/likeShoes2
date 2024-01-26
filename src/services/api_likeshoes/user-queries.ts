import { axiosInstance } from "../axios/axios_instance";
import { IUser, IResponse, IUserRegister } from "@/common/types";

class UserQueries {
  private base_url: string;

  constructor() {
    this.base_url = "users/";
  }

  async register(user: IUserRegister): Promise<IResponse<IUser>> {
    try {
      const response: IResponse<IUser> = await axiosInstance.post(
        `${this.base_url}register`,
        user
      );

      return response;
    } catch (error) {
      throw error;
    }
  }

  async login(user: IUserRegister): Promise<any> {
    try {
      const response = await axiosInstance.post(`${this.base_url}login`, user);

      return response;
    } catch (error) {
      throw error;
    }
  }
}

const userQueries = new UserQueries();

export { userQueries };
