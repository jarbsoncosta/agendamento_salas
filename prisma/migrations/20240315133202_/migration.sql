/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_termoCienciaId_fkey";

-- DropTable
DROP TABLE "File";

-- CreateTable
CREATE TABLE "file" (
    "id" SERIAL NOT NULL,
    "filename" TEXT,
    "originalName" TEXT,
    "path" TEXT,
    "termoCienciaId" TEXT,

    CONSTRAINT "file_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "file" ADD CONSTRAINT "file_termoCienciaId_fkey" FOREIGN KEY ("termoCienciaId") REFERENCES "termoCiencia"("id") ON DELETE SET NULL ON UPDATE CASCADE;
