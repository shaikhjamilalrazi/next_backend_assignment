import { NextResponse } from "next/server";

export async function POST(req, res) {
    return NextResponse.json(
        { status: true, message: "Request completed" },
        {
            status: 201,
            headers: { Authorization: "Bearer dXNlcm5hbWU6cGFzc3dvcmQ=" },
        }
    );
}
