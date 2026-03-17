import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/SupabaseServer";

export async function middleware(request: NextRequest) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data?.user) {
        return NextResponse.redirect(
            new URL("/Login?error=Please+login+first+to+access+this+route", request.url)
        );
    }
}

export const config = {
    matcher: [], 
};