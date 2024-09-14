// import { createConnection } from "../../../../lib/db";
import { NextResponse, NextRequest } from 'next/server'
import mysql from 'mysql2/promise'


let connectionParams = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
}

// define and export the GET handler function




