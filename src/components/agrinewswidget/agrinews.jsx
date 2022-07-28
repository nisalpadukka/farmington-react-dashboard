import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Card} from "react-bootstrap";

//This weather widget shows information about scientifical data in canada
//Data is extracted from the api call to newsapi
function Agrinews() {
    const [news, setNews] = useState([])
    const fetchNews = () => {
        //To fetch the news headlines from the API
        axios.get("https://newsapi.org/v2/top-headlines?category=science&country=ca&apiKey=77fdefc6db7b409d8efb3043cdfb43c2")
            .then((response) => {
                console.log(response);
                setNews(response.data.articles)
            })
    }

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            <div className="row pt-4 mb-5">
                <div className="col-lg-12">
                    <Card>
                        <Card.Header className="backG font-weight-bold" style={{color:"black", fontWeight:"bold"}}>Latest Agricultural News</Card.Header>
                        <Card.Body>
                            <Card.Text style={{overflow:"scroll", maxHeight:"450px"}}>
                                {
                                    news.map((value,index) => {
                                        return (

                                            <div key={index} className="col-lg-12 table-responsive">
                                                <table className="table table-striped table-sm">

                                                    <tr>
                                                        <td >
                                                            <a style = {{color:"blue"}} href ={value.url}><h6 style={{float:"left", padding: "1% 0%"}}>{value.title}</h6></a>
                                                        </td>
                                                    </tr>
                                                </table>

                                            </div>
                                        );
                                    })
                                }
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer> Powered By NewsAPI.org</Card.Footer>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default Agrinews;