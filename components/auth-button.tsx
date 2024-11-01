import { currentUser, SignInButton, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
const AuthButton = () => {
    const {user} = useUser();
    useEffect(()=>{
        console.log(user);
        
    },[user]);
    return <>
    {
        !user && (
            <SignInButton>
              <Button size="sm" variant="primary">
                Login
              </Button>
            </SignInButton>
          )
    }
    </>
    
}

export default AuthButton;