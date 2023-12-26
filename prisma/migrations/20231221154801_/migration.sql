-- AlterTable
ALTER TABLE "schedulingTable" ADD COLUMN     "inspectorateId" TEXT;

-- AddForeignKey
ALTER TABLE "schedulingTable" ADD CONSTRAINT "schedulingTable_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
