/*
  Warnings:

  - You are about to drop the column `conteudoHtml` on the `termoCiencia` table. All the data in the column will be lost.
  - You are about to drop the `file` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "file" DROP CONSTRAINT "file_termoCienciaId_fkey";

-- AlterTable
ALTER TABLE "termoCiencia" DROP COLUMN "conteudoHtml",
ADD COLUMN     "filename" TEXT,
ADD COLUMN     "name" TEXT,
ALTER COLUMN "versao" DROP NOT NULL;

-- DropTable
DROP TABLE "file";
