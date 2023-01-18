import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import BookLayout from "./pages/BookLayout";
import Book from "./pages/Book";
import BookList from "./pages/BookList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          {/* <Route path="/books/new" element={<BookNew />} /> */}
        </Route>
      </Routes>
    </div >
  );
}

export default App;
