import React from "react";
import { Card } from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

//Extract information from coin api about BTC
export default function Financewidget() {
    const [financialData, setData] = useState([])
    useEffect(() => {
        let response = null;
        new Promise(async (resolve, reject) => {
            try {
                response = await axios.get('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
                    headers: {
                        'X-CoinAPI-Key': '2F4CCEDF-DF3E-40E3-AA1E-23720C0EC4E4',
                    },
                });
            } catch(ex) {
                console.log(ex)
            }
            if (response) {

                const json = response.data;
                console.log(json)
                setData(json)
            }
        });

    }, []);
    return (
        <>
            <Card className="text-center pt-4">
                <Card.Header className="backG font-weight-bold" style={{color:"black", fontWeight:"bold"}}>BTC Farming is more profitable?</Card.Header>
                {typeof financialData != null ? (
                    <Card.Body>
                        <Card.Text>
                            <p>
                                Coin: {financialData.asset_id_base} <br />
                                Market Price: {financialData.rate} <br />
                                Time: {financialData.time} <br />
                            </p>
                        </Card.Text>
                    </Card.Body>
                ) : (
                    <>{ }</>
                )}
                <Card.Footer> Powered By Coin Market API</Card.Footer>
            </Card>
        </>
    );
}