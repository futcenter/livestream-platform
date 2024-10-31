import React from "react"
interface Props {
    children: React.ReactNode;
}
const AppLayout = ({children}: Props) => {
    
    return <>
        <h1>App layout</h1>
        {children}
    </>
}

export default AppLayout;