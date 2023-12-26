-- CreateTable
CREATE TABLE "mesaIndividual" (
    "id" TEXT NOT NULL,
    "numberMesa" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "inspectorateId" TEXT,

    CONSTRAINT "mesaIndividual_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mesaIndividual" ADD CONSTRAINT "mesaIndividual_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
