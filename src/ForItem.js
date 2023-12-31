import React from "react";
import Download from './Downloads';

export default function ForItem({ books }) {
    return (
    <>
        <dt>
        <a href={`https://wings.msn.to/books/${books.isbn}/${books.isbn}.jpg`} >
            {books.title} ({books.price}円)
        </a>
        </dt>
        {(() => {
            if (books.download){
                return <dd>{books.summary}<Download isbn={books.isbn} /></dd>
            } else {
                return <dd>{books.summary}</dd>
            }
        })()}
    </>
    );
}