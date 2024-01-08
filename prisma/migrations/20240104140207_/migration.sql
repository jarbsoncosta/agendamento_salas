-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "idTelegran" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inspectorateId" TEXT,
    "root" BOOLEAN,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inspectorate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inspectorate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inspetoriaId" TEXT NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hour" (
    "id" TEXT NOT NULL,
    "hInitial" INTEGER,
    "hFinal" INTEGER,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "hour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduling" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "nameProfissional" TEXT NOT NULL,
    "cpfProfissional" TEXT NOT NULL,
    "tituloPrincipalProfissional" TEXT,
    "emailProfissional" TEXT,
    "inspectorateId" TEXT NOT NULL,
    "hourInitial" INTEGER NOT NULL,
    "hourFinish" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Agendamento pendente',
    "messageStatus" TEXT,
    "adminId" TEXT,
    "roomId" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "createdIn" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "termoCienciaId" TEXT,

    CONSTRAINT "scheduling_pkey" PRIMARY KEY ("id")
);

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
    "cpf" TEXT,
    "tituloPrincipal" TEXT,
    "chairId" TEXT,
    "inspectorateId" TEXT,
    "dateInitial" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateFinal" TIMESTAMP(3),
    "status" BOOLEAN DEFAULT false,

    CONSTRAINT "schedulingTable_pkey" PRIMARY KEY ("id")
);

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
    "cpf" TEXT,
    "tituloPrincipal" TEXT,
    "dateInitial" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateFinal" TIMESTAMP(3),
    "status" BOOLEAN DEFAULT false,
    "inspectorateId" TEXT,

    CONSTRAINT "schedulingBaia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mesaIndividual" (
    "id" TEXT NOT NULL,
    "numberMesa" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "inspectorateId" TEXT,

    CONSTRAINT "mesaIndividual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedulingMesaIndividual" (
    "id" TEXT NOT NULL,
    "numberMesa" INTEGER NOT NULL,
    "nameProfissional" TEXT NOT NULL,
    "cpf" TEXT,
    "tituloPrincipal" TEXT,
    "dateInitial" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateFinal" TIMESTAMP(3),
    "status" BOOLEAN DEFAULT false,
    "inspectorateId" TEXT,
    "mesaIndividualId" TEXT,

    CONSTRAINT "schedulingMesaIndividual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "termoCiencia" (
    "id" TEXT NOT NULL,
    "versao" TEXT NOT NULL,
    "conteudoHtml" TEXT NOT NULL,
    "creatdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "termoCiencia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_inspetoriaId_fkey" FOREIGN KEY ("inspetoriaId") REFERENCES "inspectorate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hour" ADD CONSTRAINT "hour_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling" ADD CONSTRAINT "scheduling_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling" ADD CONSTRAINT "scheduling_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling" ADD CONSTRAINT "scheduling_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling" ADD CONSTRAINT "scheduling_termoCienciaId_fkey" FOREIGN KEY ("termoCienciaId") REFERENCES "termoCiencia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table" ADD CONSTRAINT "table_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chair" ADD CONSTRAINT "chair_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingTable" ADD CONSTRAINT "schedulingTable_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingTable" ADD CONSTRAINT "schedulingTable_chairId_fkey" FOREIGN KEY ("chairId") REFERENCES "chair"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingTable" ADD CONSTRAINT "schedulingTable_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "baia" ADD CONSTRAINT "baia_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingBaia" ADD CONSTRAINT "schedulingBaia_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mesaIndividual" ADD CONSTRAINT "mesaIndividual_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingMesaIndividual" ADD CONSTRAINT "schedulingMesaIndividual_inspectorateId_fkey" FOREIGN KEY ("inspectorateId") REFERENCES "inspectorate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulingMesaIndividual" ADD CONSTRAINT "schedulingMesaIndividual_mesaIndividualId_fkey" FOREIGN KEY ("mesaIndividualId") REFERENCES "mesaIndividual"("id") ON DELETE SET NULL ON UPDATE CASCADE;
