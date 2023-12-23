import { useEffect, useState } from "react";
import fetchAPI from "../services/fetchAPI";
import Card from 'react-bootstrap/Card';
// import { Card } from "react-bootstrap";

export default function List() {
    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(0);

    useEffect(() => {
        fetchAPI(1, 10)
            .then((res) => {
                console.log(res.data)
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {data.map((curr, index) => {
                return (
                    <Card>
                    <Card.Img variant="top" src={curr.small_image[0].url} />
                    <Card.Body>
                      <Card.Title><h1>
                        {curr.title}
                        </h1></Card.Title>
                      <Card.Text>
                        {curr.published_at}
                      </Card.Text>
                    </Card.Body>
                  </Card>

                );
            })}
        </>
    )

}
