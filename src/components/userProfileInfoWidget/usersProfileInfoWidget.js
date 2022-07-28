import React, { useState, useEffect } from "react";
import { useUserAuth } from "../../context/userAuthContext";


//This widget display the following current user information
//1. email
//2. weather user has verified his email or not
export default function UsersProfileInfoWidget() {
    const { user } = useUserAuth();
    return (
        <>
            <div className="col-md-3 mx-3 card mt-2  " style={{width : "50%"}}>
                <h4 className="font-weight-bold header-animated mt-2" style={{ marginBottom: "0rem" }}>
                    Profile Information
                </h4>
                <div className="align-items-center justify-content-center">
                        <>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                            <tr key="1">
                                                <td>Email</td>
                                                <td>{user.email}</td>
                                            </tr>
                                            <tr key="2">
                                                <td>Verified</td>
                                                <td> { user.emailVerified + ''}</td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                </div>
            </div>
        </>
    );
}