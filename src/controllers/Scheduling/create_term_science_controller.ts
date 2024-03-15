import { Request, Response } from "express";
import { CreateTermScienceService } from "../../services/Scheduling/create_term_science_service";

export class CreateTermScienceController {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            const name: string = req.body.name; 
            const versao: string = req.body.versao;
            const file = req.file;

            // Verifica se o arquivo foi enviado corretamente
            if (!file) {
                throw new Error('File not received');
            }
            
            const createTermScienceService = new CreateTermScienceService(); 
            const updatedDocument = await createTermScienceService.execute(name, versao, file); 
            
            res.json(updatedDocument);
        } catch (error) {
            console.error('Error uploading file:', error);
            res.status(500).json({ error: 'Failed to upload file' });
        }
    }
}
