import {Route, Routes} from "react-router-dom";
import {DefaultPage, NotFoundPage, SignUpPage} from "../pages";
import React from "react";
import {ROUTES} from "./routes";

let SuspendedSignInPage = React.lazy(() => import('../pages/signIn'));

export function MainRouter() {

    return (
        <Routes>
            <Route path={ROUTES.public.root} element={<DefaultPage />}/>
            <Route path={ROUTES.public.signIn} element={<SuspendedSignInPage />}/>
            <Route path={ROUTES.public.signUp} element={<SignUpPage />}/>
            <Route path='*' element={<NotFoundPage />}/> 
        </Routes>
    )
}