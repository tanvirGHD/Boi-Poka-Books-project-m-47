import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../Utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('')

  const allBooks = useLoaderData();
  //ideally we will directly get the read book list form the database

  useEffect(() => {
    const storedReadList = getStoreReadList();
    const StoredReadListInt = storedReadList.map((id) => parseInt(id));

    //not the best way => worst way
    console.log(storedReadList, StoredReadListInt, allBooks);

    //
    const readBookList = allBooks.filter((book) =>
      StoredReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);



  const handleSort = sortType => {
    setSort(sortType)

    //
    if(sortType === 'No of pages'){
        const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sortedReadList)
    }

    if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating)
        setReadList(sortedReadList)
    }

  }



  return (
    <div>
      <h3 className="text-3xl">List Books</h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}`: 'Short by'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort('Ratings')}>
            <a>Ratings</a>
          </li>
          <li onClick={() => handleSort('No of Pages')}>
            <a>No of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read: {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My wished list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
