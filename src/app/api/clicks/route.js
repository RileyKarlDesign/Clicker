// import { createConnection } from "../../../../lib/db";
import { NextResponse, NextRequest } from 'next/server'
import mysql from 'mysql2/promise'


let connectionParams = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
}


export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            return GET();
        case 'POST':
            return POST();
    }

}


export async function GET(request) {
    try {
        const connection = await mysql.createConnection(connectionParams)
        let get_exp_query = ''
        get_exp_query = 'SELECT * FROM allclicks.click_count'
        let values = []
        const [results] = await connection.execute(get_exp_query, values)
        connection.end()
        return NextResponse.json({ runningCount: results })

    } catch (err) {
        console.log('ERROR: API - ', (err).message)
        const response = {
            error: (err).message,
            returnedStatus: 200,
        }
        res = NextResponse.json(response, { status: 200 })
        return res
    }
}


export const POST = async function (req, res) {

    try {

        function streamToString(req) {
            const chunks = [];
            return new Promise((resolve, reject) => {
                stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
                stream.on('error', (err) => reject(err));
                stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
            })
        }

        const result = await streamToString(stream)

        const count = req.count;
        const connection = await mysql.createConnection(connectionParams)
        // let get_exp_query = 'UPDATE allclicks.click_count SET click_count = 300300'

        let get_exp_query = `UPDATE allclicks.click_count SET click_count = ?`;
        let values = [click_count]


        const [results] = await connection.execute(get_exp_query, values)
        connection.end()
        return NextResponse.json({ runningCount: results })

    } catch (err) {
        console.log('ERROR: API - ', (err).message)
        const response = {
            error: (err).message,
            returnedStatus: 200,
        }
        res = NextResponse.json(response, { status: 200 })
        return res
    }
}



// export async function POST(req) {
//     try {
//         const body = await req.text();
//         const { count } = JSON.parse(body);
//         const connection = await mysql.createConnection(connectionParams);

//         const updateQuery = 'UPDATE allclicks.click_count SET click_count = click_count + ?';
//         const values = [100];

//         const [results] = await connection.execute(updateQuery, values);
//         await connection.end();

//         return NextResponse.json({ success: true, updatedCount: results.affectedRows });
//     } catch (err) {
//         console.error('ERROR: API - ', err.message);
//         return NextResponse.json({ error: err.message }, { status: 500 });
//     }
// }

export const addClick = async function (req, res) {
    return 'Clicking Demon'
}


