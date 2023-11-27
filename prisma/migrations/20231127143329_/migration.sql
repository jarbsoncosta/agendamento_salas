/*
  Warnings:

  - You are about to drop the `professional` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "professional" DROP CONSTRAINT "professional_adminId_fkey";

-- DropTable
DROP TABLE "professional";
