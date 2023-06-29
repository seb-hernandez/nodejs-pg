import { pool } from '../db';
import { Request, Response } from 'express';
import * as queries from './accountQueries';

function createAccount(req: Request, res: Response) {
    const { owner, balance, currency } = req.body;
    pool.query(
        queries.createAccount,
        [owner, balance, currency],
        function (err, result) {
            if (err) throw err;
            res.status(201).json(result.rows);
        }
    );
}

function getAccount(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    pool.query(queries.getAccount, [id], function (err, result) {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
}

function listAccounts(req: Request, res: Response) {
    const { limit, offset } = req.query;
    pool.query(queries.listAccounts, [limit, offset], function (err, result) {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
}

function updateAccount(req: Request, res: Response) {
    const { id, balance } = req.body;
    pool.query(queries.updateAccount, [id, balance], function (err, result) {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
}

function deleteAccount(req: Request, res: Response) {
    const { id } = req.body;
    pool.query(queries.deleteAccount, [id], function (err, result) {
        if (err) throw err;
        res.status(204).json(result.rows);
    });
}

export {
    createAccount,
    getAccount,
    listAccounts,
    updateAccount,
    deleteAccount,
};
