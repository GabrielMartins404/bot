import dotenv from 'dotenv'

dotenv.config()

export const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    aiApi: {
        baseUrl: process.env.AI_API_BASE_URL,
        apiKey: process.env.AI_API_KEY
    }
}