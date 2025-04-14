-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "cpf" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL
);
