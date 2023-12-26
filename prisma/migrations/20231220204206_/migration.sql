-- AlterTable
ALTER TABLE "schedulingTable" ADD COLUMN     "chairId" TEXT;

-- AddForeignKey
ALTER TABLE "schedulingTable" ADD CONSTRAINT "schedulingTable_chairId_fkey" FOREIGN KEY ("chairId") REFERENCES "chair"("id") ON DELETE SET NULL ON UPDATE CASCADE;
