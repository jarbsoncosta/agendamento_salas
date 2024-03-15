/*
  Warnings:

  - You are about to drop the column `filename` on the `termoCiencia` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `termoCiencia` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "termoCiencia" DROP COLUMN "filename",
DROP COLUMN "path";
