-- AlterTable
ALTER TABLE "room" ADD COLUMN     "qtdPlaces" INTEGER;

-- CreateTable
CREATE TABLE "convidado" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "schedulingId" TEXT,

    CONSTRAINT "convidado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "convidado" ADD CONSTRAINT "convidado_schedulingId_fkey" FOREIGN KEY ("schedulingId") REFERENCES "scheduling"("id") ON DELETE SET NULL ON UPDATE CASCADE;
