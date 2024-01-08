-- CreateTable
CREATE TABLE "datasRestritas" (
    "id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "inspectorateId" TEXT,

    CONSTRAINT "datasRestritas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "datasRestritas" ADD CONSTRAINT "datasRestritas_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
