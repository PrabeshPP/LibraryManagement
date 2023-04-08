import {NavLink} from "react-router-dom"
import classes from "./Book-UI.module.css";
import { confirmAlert } from 'react-confirm-alert'; // Import library
import 'react-confirm-alert/src/react-confirm-alert.css';
interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string,
    admin: boolean
}

const Card = (props: any):JSX.Element => {
    const book: Book = props.Book

    function deleteHandler() {
        console.log("delete button pressed");
        //pop alert mesage before you delete the data
        confirmAlert({
            title: 'Confirm deletion', // Title of popup
            message: 'Are you sure you want to delete?', // Message of popup
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                  // Code to delete item goes here
                //delete the particular book id from the database
                },
              },
              {
                label: 'No',
                onClick: () => {
                
                },
              },
            ],
          });

    }
    return (
        <NavLink to={`/home/books/${book.id}`} key={book.id} className={classes.box}>
            <img
                src={book.coverImage}
                className=" h-[30vh] w-[60%] object-contain mt-2"
                alt={book.bookName}
            />
            <div className='flex justify-between'>
            <p className='text-[#10162f] w-[90%] text-md font-bold'>{book.bookName}</p>
            
            {props.admin? <i className="uil uil-trash-alt text-lg" onClick={deleteHandler}></i>: null}
            </div>
        </NavLink>
    )
}

export default Card