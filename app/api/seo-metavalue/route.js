"use server"

import mysql from "mysql2/promise"

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: "appeakwebsite",
    })

    const [rows] = await connection.execute("SELECT * FROM seo_metavalue")
    await connection.end()

    return Response.json(rows)
  } catch (error) {
    console.error("Database error:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    })
  }
}
