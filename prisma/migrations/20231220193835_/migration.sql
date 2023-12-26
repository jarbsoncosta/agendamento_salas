-- CreateTable
CREATE TABLE "table" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "inspectorateId" TEXT,

    CONSTRAINT "table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chair" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "tableId" TEXT,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "chair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedulingTable" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "tableId" TEXT,
    "nameProfissional" TEXT NOT NULL,

    CONSTRAINT "schedulingTable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "table" ADD CONSTRAINT "table_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chair" ADD CONSTRAINT "chair_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingTable" ADD CONSTRAINT "schedulingTable_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE SET NULL ON UPDATE CASCADE;
