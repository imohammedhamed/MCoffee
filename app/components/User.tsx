import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function User(prop:{id: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined,fullName: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined,email: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined}):JSX.Element {
    return (
        <>
        <br />
        <h2>User</h2>
        <br />
        <h3> <span className="text-Blue600">user id :</span> {prop.id}</h3>
        <h3> <span className="text-Blue600">user Name :</span> {prop.fullName}</h3> 
        <h3> <span className="text-Blue600">user email :</span> {prop.email}</h3>
        </>
    )
}
