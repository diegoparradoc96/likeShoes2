import { IResponse, IShoeSection } from "@/common/types";
import { axiosInstance } from "../axios/axios_instance";

class ShoeQueries {
  private base_url: string;

  constructor() {
    this.base_url = "shoes/";
  }

  async getShoeSections(): Promise<IShoeSection[]> {
    try {
      const response = await axiosInstance.get(`${this.base_url}sections`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const shoeQueries = new ShoeQueries();

export { shoeQueries };
