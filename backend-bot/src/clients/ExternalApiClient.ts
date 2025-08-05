import axios, {AxiosInstance} from "axios";
import { config } from "../config";

class ExternalApi{
    private client: AxiosInstance

    constructor(){
        if(!config.aiApi.baseUrl || !config.aiApi.apiKey){
            throw new Error("AI API credentials are not configured")
        }

        this.client = axios.create({
            baseURL: config.aiApi.baseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async generateText(prompt: string): Promise<string>{
        try {
            const response = await this.client.get("/teste")
            return response.data
        } catch (error) {
            console.error("Error calling de route of IA")
            throw new Error("Error calling de route of IA")
        }
    }
}

export const aiApiClient = new ExternalApi()