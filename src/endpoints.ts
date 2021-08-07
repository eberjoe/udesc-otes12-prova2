import express, { Request, Response } from 'express';
import { PrismaClient } from '.prisma/client';

const endpoints = express.Router();
const prisma = new PrismaClient();

type vendaRow = {
  funcionario: string;
  regiao: string;
  trimestre: string;
  cota: number;
  vendas: number;
}

endpoints.post('/create-venda', async (req: Request, res: Response) => {
  try {
    const venda: vendaRow = req.body;
    const newVenda = await prisma.vendas.create({ data: venda });
    res.status(201).json(newVenda);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

endpoints.put('/update-venda/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const venda = req.body;
    const updatedVenda = await prisma.vendas.update({
      where: {
        id: id
      },
      data: venda
    });
    res.status(200).json(updatedVenda);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

endpoints.delete('/delete-venda/:id', async (req:Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedVenda = await prisma.vendas.delete({
      where: {
        id: id
      }
    });
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default endpoints;