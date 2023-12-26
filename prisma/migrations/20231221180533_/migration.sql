-- CreateTable
CREATE TABLE "baia" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "tableId" TEXT,
    "status" BOOLEAN NOT NULL,
    "inspectorateId" TEXT,

    CONSTRAINT "baia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedulingBaia" (
    "id" TEXT NOT NULL,
    "numberBaia" INTEGER NOT NULL,
    "nameProfissional" TEXT NOT NULL,
    "dateInitial" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateFinal" TIMESTAMP(3),
    "status" BOOLEAN DEFAULT false,
    "inspectorateId" TEXT,

    CONSTRAINT "schedulingBaia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "baia" ADD CONSTRAINT "baia_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingBaia" ADD CONSTRAINT "schedulingBaia_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
