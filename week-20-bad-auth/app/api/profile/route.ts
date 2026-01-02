import { NextRequest, NextResponse } from "next/server";

export function GET(req : NextRequest){
    return NextResponse.json({
        avatarUrl : "https://image.google.com/cat.png"
    })
}