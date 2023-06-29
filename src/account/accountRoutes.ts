import { Router } from 'express';
import {
    createAccount,
    deleteAccount,
    getAccount,
    listAccounts,
    updateAccount,
} from './accountController';

const accountRouter = Router();

accountRouter.post('/', createAccount);
accountRouter.get('/:id', getAccount);
accountRouter.get('/', listAccounts);
accountRouter.put('/', updateAccount);
accountRouter.delete('/', deleteAccount);

export { accountRouter };
