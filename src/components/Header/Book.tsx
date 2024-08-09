import { IBook } from "@/types/books";
import React from "react";

export default function Book({ book }: { book: IBook }) {
  console.log(book);
  return <div>{book.translations[0].title}</div>;
}
