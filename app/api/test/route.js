import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // Test the connection
    const connection = await pool.getConnection();
    await connection.release();
    
    return NextResponse.json({ 
      status: 'success', 
      message: 'Database connected successfully' 
    });
  } catch (error) {
    return NextResponse.json({ 
      status: 'error', 
      message: error.message 
    }, { status: 500 });
  }
}
