import { useParams } from "react-router-dom"

const BookDetail = () => {
    const params = useParams();
    return(
        <div>
            <h1>aaa:::{params.id}</h1>
            책 상세 페이지
        </div>
    )
}
export default BookDetail