/*
  Warnings:

  - You are about to drop the column `rol` on the `User` table. All the data in the column will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "rol",
ADD COLUMN     "role" VARCHAR(255) NOT NULL;
