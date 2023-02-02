/*
  Warnings:

  - You are about to drop the column `email` on the `professional` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `professional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professionalTitle` to the `professional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "professional" DROP COLUMN "email",
ADD COLUMN     "adminId" TEXT,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "professionalTitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "scheduling" ADD COLUMN     "adminId" TEXT;

-- AddForeignKey
ALTER TABLE "professional" ADD CONSTRAINT "professional_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling" ADD CONSTRAINT "scheduling_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
