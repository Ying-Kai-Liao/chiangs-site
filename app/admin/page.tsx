'use client'

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function AdminPage () {
    return (
        <>
            <div className="h-screen w-screen flex flex-col items-center justify-center">
                Hello Admin
                <Button onClick={()=> signOut()}>Logout</Button>
            </div>
        </>
    )
}