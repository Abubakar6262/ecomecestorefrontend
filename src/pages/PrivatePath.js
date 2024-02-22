import React from 'react'
import { useAuthContext } from '../contaxts/AuthContaxt';
import Login from '../pages/Auth/Login'

export default function PrivatePath(props) {
    const { curUserToken } = useAuthContext();
    const { Component } = props;

    if (!curUserToken) {
        return <Login />
    } else {
        return <Component />
    }


}