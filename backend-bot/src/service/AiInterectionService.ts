import { aiApiClient } from "../clients/ExternalApiClient";

export class AiInterectionService{
    public async getAiResponse(userPrompt: string): Promise<{reply: string}>{
        const sanitizePrompt = this.sanitizeInput(userPrompt)

        const aiGeneretatorText = await aiApiClient.generateText(sanitizePrompt)

        return {
            reply: aiGeneretatorText
        }
    }

    private sanitizeInput(input: string): string{
        return input.trim()
    } 
}