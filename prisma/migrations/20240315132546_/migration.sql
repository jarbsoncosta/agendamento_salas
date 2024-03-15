-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "filename" TEXT,
    "originalName" TEXT,
    "path" TEXT,
    "termoCienciaId" TEXT,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_termoCienciaId_fkey" FOREIGN KEY ("termoCienciaId") REFERENCES "termoCiencia"("id") ON DELETE SET NULL ON UPDATE CASCADE;
