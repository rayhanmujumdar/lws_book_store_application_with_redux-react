import React from 'react'
import From from './Form'

export default function AddBook() {
  return (
    <main className="py-6 2xl:px-6">
        <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <From></From>
            </div>
        </div>
    </main>
  )
}
