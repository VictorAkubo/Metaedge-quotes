-- CreateTable
CREATE TABLE "quote" (
    "id" SERIAL NOT NULL,
    "quote" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "quote_quote_key" ON "quote"("quote");
