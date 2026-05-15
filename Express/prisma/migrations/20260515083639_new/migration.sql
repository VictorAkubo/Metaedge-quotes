/*
  Warnings:

  - You are about to drop the `quote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "quote";

-- CreateTable
CREATE TABLE "Quote" (
    "id" SERIAL NOT NULL,
    "quote" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Quote_quote_key" ON "Quote"("quote");
