import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../Utility/addToDb";


const BookDetail = () => {


    const {bookId} = useParams();
    const id =parseInt(bookId)

    const data = useLoaderData()

    const book = data.find(book => book.bookId === id)

    const {bookName, author, image, tags, rating, category} = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. Understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array, list, collection: 
         * 4. check: if the book is already in the  readList
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */


        addToStoreReadList(id)

    }
    

    return (
        <div className="w-3/12 mx-auto mb-10">
            <h2>Book Details: {bookId}</h2>
            <figure className="bg-gray-100 py-10  rounded-xl">
            <img className="h-[200px] " src={image} alt="{bookName}" />
            </figure>
            <h2 className="card-title text-3xl font-bold">{bookName}</h2>
            <p className="font-bold"> By: {author}</p>
            <hr className="border-dashed"></hr>
            <button onClick={ () => handleMarkAsRead(bookId)} className="btn btn-outline mr-3 btn-accent">Mark as Read</button>
            <button  className="btn btn-accent">Add to WishList</button>
        </div>
    );
};

export default BookDetail;