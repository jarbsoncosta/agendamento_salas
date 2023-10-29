-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "inspectorateId" TEXT;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
