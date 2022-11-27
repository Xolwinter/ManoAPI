const waitPort = require('wait-port');
const fs = require('fs');
const mysql = require('mysql');

const {
    MYSQL_HOST: HOST,
    MYSQL_HOST_FILE: HOST_FILE,
    MYSQL_USER: USER,
    MYSQL_USER_FILE: USER_FILE,
    MYSQL_PASSWORD: PASSWORD,
    MYSQL_PASSWORD_FILE: PASSWORD_FILE,
    MYSQL_DB: DB,
    MYSQL_DB_FILE: DB_FILE,
} = process.env;

let pool;

async function init() {
    const host = HOST_FILE ? fs.readFileSync(HOST_FILE) : HOST;
    const user = USER_FILE ? fs.readFileSync(USER_FILE) : USER;
    const password = PASSWORD_FILE ? fs.readFileSync(PASSWORD_FILE) : PASSWORD;
    const database = DB_FILE ? fs.readFileSync(DB_FILE) : DB;

    await waitPort({ host, port : 3306});
    
    pool = mysql.createPool({
        connectionLimit: 5,
        host,
        user,
        password,
        database,
        charset: 'utf8mb4',
    });

    await new Promise((acc, rej)=>{
        pool.query('SHOW TABLES;', (err, tab) => {
            if (err) return rej(err);
            console.log(`Showing tables`);
            acc(tab);
        })
    })

    return new Promise((acc, rej) => {
        
        pool.query(
            'CREATE TABLE IF NOT EXISTS equipe (id varchar(36) NOT NULL, name varchar(255) NOT NULL) DEFAULT CHARSET utf8mb4',
            err => {
                if (err) return rej(err);

                console.log(`Connected to mysql db at host ${HOST}`);
                acc();
            },
        );/*
        pool.query(
            'CREATE TABLE IF NOT EXISTS match (id varchar(36) NOT NULL, cote FLOAT NOT NULL, equipe int(255) NOT NULL, ligue int(255) NOT NULL, date_match DATE NOT NULL) DEFAULT CHARSET utf8mb4',
            err => {
                if (err) return rej(err);

                console.log(`Other table created ${HOST}`);
                acc();
            },
        );*/
    }); 
}

async function teardown() {
    return new Promise((acc, rej) => {
        pool.end(err => {
            if (err) rej(err);
            else acc();
        });
    });
}

async function getTeams() {
    return new Promise((acc, rej) => {
        pool.query('SELECT * FROM equipe', (err, rows) => {
            if (err) return rej(err);
            acc(
                rows.map(item =>
                    Object.assign({}, item),
                ),
            );
        });
    });
}


async function getTeam(id) {
    return new Promise((acc, rej) => {
        pool.query('SELECT * FROM equipe WHERE id=?', [id], (err, rows) => {
            if (err) return rej(err);
            acc(
                rows.map(item =>
                    Object.assign({}, item),
                )[0],
            );
        });
    });
}

async function storeTeam(team) {
    return new Promise((acc, rej) => {
        pool.query(
            'INSERT INTO equipe (id, name) VALUES (?, ?)',
            [team.id, team.name],
            err => {
                if (err) return rej(err);
                acc();
            },
        );
    });
}


async function updateTeam(id, team) {
    return new Promise((acc, rej) => {
        pool.query(
            'UPDATE equipe SET name=? WHERE id=?',
            [team.name,  id],
            err => {
                if (err) return rej(err);
                acc();
            },
        );
    });
}

async function removeTeam(id) {
    return new Promise((acc, rej) => {
        pool.query('DELETE FROM equipe WHERE id = ?', [id], err => {
            if (err) return rej(err);
            acc();
        });
    });
} 

module.exports = {
    init,
    teardown,
    getTeams,
    getTeam,
    storeTeam,
    updateTeam,
    removeTeam, 
};
