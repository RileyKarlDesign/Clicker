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
        const count = request.count;
        const connection = await mysql.createConnection(connectionParams)
        // let get_exp_query = 'UPDATE allclicks.click_count SET click_count = 666555'
        let get_exp_query = 'UPDATE allclicks.click_count SET click_count = ?';
        let values = [count]
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


