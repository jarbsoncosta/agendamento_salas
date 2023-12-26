-- CreateTable
CREATE TABLE "schedulingMesaIndividual" (
    "id" TEXT NOT NULL,
    "numberMesa" INTEGER NOT NULL,
    "nameProfissional" TEXT NOT NULL,
    "dateInitial" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateFinal" TIMESTAMP(3),
    "status" BOOLEAN DEFAULT false,
    "inspectorateId" TEXT,
    "mesaIndividualId" TEXT,

    CONSTRAINT "schedulingMesaIndividual_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedulingMesaIndividual" ADD CONSTRAINT "schedulingMesaIndividual_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingMesaIndividual" ADD CONSTRAINT "schedulingMesaIndividual_mesaIndividualId_fkey" FOREIGN KEY ("mesaIndividualId") REFERENCES "mesaIndividual"("id") ON DELETE SET NULL ON UPDATE CASCADE;
