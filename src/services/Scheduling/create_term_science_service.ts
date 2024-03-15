import { prisma } from "@config/prisma";
import { TermoCiencia } from "@prisma/client";
import fs from 'fs';

type UploadedFile = Express.Multer.File;
export class CreateTermScienceService {
    async execute( versao: string, file: UploadedFile): Promise<TermoCiencia> {
        // Verifica se o arquivo foi enviado corretamente
        if (!file || !file.buffer) {
            throw new Error('Arquivo não recebido ou buffer do arquivo vazio');
        }

        const { originalname, buffer } = file;

        const fileName = `${Date.now()}-${originalname}`;
        const filePath = `uploads/${fileName}`;

        try {
            fs.writeFileSync(filePath, buffer);
        } catch (error) {
            console.error('Erro ao escrever arquivo no disco:', error);
            throw new Error('Falha ao escrever arquivo no disco');
        }

        const updatedDocument = await prisma.termoCiencia.create({
            data: {
                name: originalname,
                versao
            }
        });

        return updatedDocument;
    }
}
