import { useEffect, useState } from "react";
import fetchAPI from "../services/fetchAPI";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/List.css";

export default function List() {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(10);
    const [published_at, setSortBy] = useState("newest");
    

    useEffect(() => {
        fetchData(pageNumber, pageSize, published_at);
    }, [pageNumber, pageSize, published_at]);

    const fetchData = (page, size, sort) => {
        fetchAPI(page, size, sort)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                const total = typeof res.total === 'number' ? res.total : 0;
                const calculatedTotalPages = Math.max(Math.ceil(total / size), 1);
                setTotalPages(calculatedTotalPages);
            })
            .catch((err) => console.log(err));
    };

    const handlePageChange = (page) => {
        setPageNumber(page);
    };

    const handlePageSizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10);
        setPageSize(newSize);
        // Reset page number to 1 when changing page size
        setPageNumber(1);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const renderCards = () => {
        return data.map((curr, index) => {
            const formattedDate = new Date(curr.published_at).toLocaleDateString('en-UK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });

            return (
                <div key={index} className="col-md-4 mb-4">
                    <Card style={{ height: "100%" }} className="d-flex flex-column shadow">
                        <Card.Img variant="top" style={{ height: "250px" }} src={curr.small_image[0].url} loading="lazy" />
                        <Card.Body className="d-flex flex-column">
                            <Card.Text>
                                {formattedDate}
                            </Card.Text>
                            <Card.Title><h4>{curr.title}</h4></Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            );
        });
    };

    const renderPageSizeSelector = () => {
        const pageSizeOptions = [10, 20, 50];

        return (
            <Form.Group controlId="pageSize" className="py-2 pe-4 rounded-pill">
                <span>Select Page Size</span>
                <Form.Control style={{ borderRadius:'50px' }} as="select" value={pageSize} onChange={handlePageSizeChange}>
                    {pageSizeOptions.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
        );
    };

    const renderSortSelector = () => {
        return (
            <Form.Group controlId="published_at" className="py-2 rounded-pill">
                <spa>Sort By:</spa>
                <Form.Control style={{ borderRadius:'50px' }} as="select" value={published_at} onChange={handleSortChange}>
                    <option value="newest">Newest to Oldest</option>
                    <option value="oldest">Oldest to Newest</option>
                </Form.Control>
            </Form.Group>
        );
    };

    const renderPagination = () => {
        const items = [];
        for (let number = 1; number <= totalPages; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === pageNumber}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }
    
        return (
            <div  className="d-flex justify-content-between mt-3">
                <Pagination >
                    {items}
                </Pagination>
                <div  className="align-self-center">
                    Page {pageNumber} of {totalPages}
                </div>
            </div>
        );
    };
    

    return (
        <div className="container-sm">
            <div className="d-flex justify-content-end">
                {renderPageSizeSelector()}
                {renderSortSelector()}
            </div>
            <div className="row">
                {renderCards()}
            </div>
            {renderPagination()}
        </div>
    );
}
