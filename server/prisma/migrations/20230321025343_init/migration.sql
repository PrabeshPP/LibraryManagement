/*
  Warnings:

  - You are about to drop the column `authorName` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "authorName";

-- CreateIndex
CREATE UNIQUE INDEX "Book_authorId_key" ON "Book"("authorId");
