import express from 'express';
import { accountRouter } from './account/accountRoutes';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use('/accounts', accountRouter);

app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}`);
});
