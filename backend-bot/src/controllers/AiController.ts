import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { AiInterectionService } from "../service/AiInterectionService";

@Controller('api/ai')
export class AiController{
    private aiService = new AiInterectionService()

    @Post('prompy')
    public async handlePrompt(req: Request, res: Response): Promise<void>{
        try {
            const {prompt} = req.body

            if(!prompt || typeof prompt !== 'string'){
                res.status(400).json({error: 'Prompt is required and  must be String'})
                return
            }
            const result = await this.aiService.getAiResponse(prompt)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ error: 'An internal server error occurred.' });
        }
    }

    @Get("/")
    public async hello(req: Request, res: Response): Promise<void>{

        res.status(200).send("<h1>Olá, Mundo</h1>")
    }
}