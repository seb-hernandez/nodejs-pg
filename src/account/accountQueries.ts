const createAccount = `
    INSERT INTO accounts (
        owner, balance, currency
    ) VALUES (
        $1, $2, $3
    ) RETURNING *;
`;

const getAccount = `
    SELECT * FROM accounts
    WHERE id = $1
    LIMIT 1;
`;

const listAccounts = `
    SELECT * FROM accounts
    ORDER BY id
    LIMIT $1
    OFFSET $2;
`;

const updateAccount = `
    UPDATE accounts
    SET balance = $2
    WHERE id = $1
    RETURNING *;
`;

const deleteAccount = `
    DELETE FROM accounts
    WHERE id = $1;
`;

export {
    createAccount,
    getAccount,
    listAccounts,
    updateAccount,
    deleteAccount,
};
