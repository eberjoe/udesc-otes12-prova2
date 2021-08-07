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
        id
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
    await prisma.vendas.delete({
      where: {
        id
      }
    });
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

endpoints.get('/monitor-func/:func', async (req: Request, res: Response) => {
  try {
    const func = req.params.func;
    const vendasByFunc = await prisma.vendas.findMany({
      where: {
        funcionario: func
      }
    });
    res.status(200).json(vendasByFunc);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

endpoints.get('/monitor-reg/:reg', async (req: Request, res: Response) => {
  try {
    const reg = req.params.reg;
    const vendasByReg = await prisma.vendas.findMany({
      where: {
        regiao: reg
      }
    });
    res.status(200).json(vendasByReg);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

endpoints.get('/monitor-tri/:tri', async (req: Request, res: Response) => {
  try {
    const tri = req.params.tri;
    const vendasByTri = await prisma.vendas.findMany({
      where: {
        trimestre: tri
      }
    });
    res.status(200).json(vendasByTri);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

endpoints.get('/all', async (req: Request, res: Response) => {
  try {
    const allVendas = await prisma.vendas.findMany();
    res.status(200).json(allVendas);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default endpoints;