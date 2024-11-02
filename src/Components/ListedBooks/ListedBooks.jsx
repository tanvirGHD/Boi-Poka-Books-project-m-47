import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../Utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {

    const [readList, setReadList] = useState([])

    const allBooks = useLoaderData()
    //ideally we will directly get the read book list form the database

    useEffect( () => {
        const storedReadList = getStoreReadList();
        const StoredReadListInt = storedReadList.map(id => parseInt(id))

        //not the best way => worst way
        console.log(storedReadList, StoredReadListInt, allBooks);

        //
        const readBookList = allBooks.filter(book => StoredReadListInt.includes(book.bookId));


        setReadList(readBookList)
        
    },[])

  return (
    <div>
      <h3 className="text-3xl">List Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read: {readList.length}</h2>
          {
            readList.map(book => < Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My wished list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
