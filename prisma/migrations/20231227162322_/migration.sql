-- AlterTable
ALTER TABLE "schedulingBaia" ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "tituloPrincipal" TEXT;

-- AlterTable
ALTER TABLE "schedulingMesaIndividual" ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "tituloPrincipal" TEXT;

-- AlterTable
ALTER TABLE "schedulingTable" ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "tituloPrincipal" TEXT;
