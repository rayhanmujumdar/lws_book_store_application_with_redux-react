import React from "react";
import Form from "./Form";

export default function EditBook() {
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          <Form></Form>
        </div>
      </div>
    </main>
  );
}
