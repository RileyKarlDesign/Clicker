// import { createConnection } from "../../../../lib/db";
import { NextResponse, NextRequest } from 'next/server'
import mysql from 'mysql2/promise'


let connectionParams = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
}

// this works but is not the best way to do it
// export async function GET(request) {
//     try {
//         // 2. connect to database
//         const connection = await mysql.createConnection(connectionParams)
//         // 3. create a query to fetch data
//         let get_exp_query = ''
//         get_exp_query = 'SELECT * FROM allclicks.click_count'
//         // we can use this array to pass parameters to the SQL query
//         let values = []
//         // 4. exec the query and retrieve the results
//         const [results] = await connection.execute(get_exp_query, values)
//         // 5. close the connection when done
//         connection.end()
//         // return the results as a JSON API response
//         return NextResponse.json({ runningCount: results })
//     } catch (err) {
//         console.log('ERROR: API - ', (err).message)

//         const response = {
//             error: (err).message,

//             returnedStatus: 200,
//         }

//         return NextResponse.json(response, { status: 200 })
//     }
// }


// switch statement

// "click_id": 1,
//     "click_count": 10,
//         "timestamp": "2024-09-13T19:56:46.000Z"

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
    let cleanReq = JSON.parse(req.body)
    console.log(cleanReq)

    try {

        let cleanReq = JSON.parse(req.body)
        const currectClickCount = cleanReq.click_count;
        const updatedAt = req.body.timestamp;
        const newValue = currectClickCount + 1;


        const connection = await mysql.createConnection(connectionParams)
        let get_exp_query = ''
        get_exp_query = `UPDATE allclicks.click_count  SET click_count = 100`
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
export const addClick = async function (req, res) {
    return 'Clicking Demon'
}


