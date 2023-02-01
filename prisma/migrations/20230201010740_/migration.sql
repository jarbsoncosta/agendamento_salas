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

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_inspetoriaId_fkey" FOREIGN KEY ("inspetoriaId") REFERENCES "inspectorate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
