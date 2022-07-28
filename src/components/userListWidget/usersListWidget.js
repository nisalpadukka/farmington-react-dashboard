import React, { useState, useEffect } from "react";
import {db} from "../../firebase-config";
import {collection, getDocs } from "firebase/firestore";


//This widget is used to display existing users in the system
export default function UsersListWidget() {
    //loading conditions to avoid unloaded data
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState();
    const collectionRef = collection(db, "users");

    useEffect(() => {
        setLoading(true);
        const getUsers = async () => {
            const data = await getDocs(collectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        };

        getUsers();
    }, []);

    return (
        <>
            <div className="col-md-3 mx-3 card mt-2  " style={{width : "50%"}}>
                <h4 className="font-weight-bold header-animated mt-2" style={{ marginBottom: "0rem" }}>
                    Users
                </h4>
                <div className="align-items-center justify-content-center">
                    {loading ? (
                        ""
                    ) : (
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
                                    {users?.map((value, i) => {
                                        return (
                                            <tr key={value.id}>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}