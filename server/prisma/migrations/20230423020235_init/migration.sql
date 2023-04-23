/*
  Warnings:

  - Added the required column `coverImagePublicId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "role" SET DEFAULT 'admin';

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "coverImagePublicId" TEXT NOT NULL;
