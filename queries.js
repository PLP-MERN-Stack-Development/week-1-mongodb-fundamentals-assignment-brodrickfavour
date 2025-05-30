db.books.insertMany([
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', published_year: 1960, price: 12.99, in_stock: true, in_stock: true, publisher: 'J. B. Lippincott & Co.'},
    {title: '1984', author: 'George Orwell', genre: 'Dystopian', published_year: 1949, price: 10.99, in_stock: true, pages: 328, publisher: 'Secker & Warburg'},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', published_year: 1925, price: 9.99, in_stock: true, pages: 180,publisher: 'Charles Scribner\'s Sons'},
    {title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', published_year: 1932, price: 11.50, in_stock: false, pages: 311, publisher: 'Chatto & Windus'},
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', published_year: 1937, price: 14.99, in_stock: true, pages: 310, publisher: 'George Allen & Unwin'},
    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', published_year: 1951, price: 8.99, in_stock: true, pages: 224, publisher: 'Little, Brown and Company'},
    {title: 'Pride and Prejudice',
    author: 'Jane Austen', genre: 'Romance', published_year: 1813, price: 7.99, in_stock: true, pages: 432, publisher: 'T. Egerton, Whitehall'},
    {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', published_year: 1954, price: 19.99, in_stock: true, pages: 1178, publisher: 'Allen & Unwin'},
    {title: 'Animal Farm', author: 'George Orwell', genre: 'Political Satire', published_year: 1945, price: 8.50, in_stock: false, pages: 112, publisher: 'Secker & Warburg'},
    {title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', published_year: 1988, price: 10.99, in_stock: true, pages: 197, publisher: 'HarperOne'},
    {title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', published_year: 1851, price: 12.50, in_stock: false, pages: 635, publisher: 'Harper & Brothers'},
    {title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Gothic Fiction', published_year: 1847, price: 9.99, in_stock: true, pages: 342, publisher: 'Thomas Cautley Newby'}

])

//Examples of queries
db.books.find()

db.books.find({ author: "George Orwell" })

db.books.find({ published_year: { $gt: 1950 } })

db.books.find({ genre: "Fiction" })

db.books.find({ in_stock: true })

// Update the price of a specific book
db.books.updateOne(
  { title: 'Herman Melville' }, 
  { $set: { price: 19.99 } }  
);

// Delete a book by its title
db.books.deleteOne({ title: 'To Kill a Mockingbird' });

// 1. Find books that are both in stock and published after 2010
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } }
);

// 2. Use projection to return only the title, author, and price fields
db.books.find(
  { in_stock: true, published_year: { $gt: 1950 } },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Sort by price ascending
db.books.find(
  { in_stock: true, published_year: { $gt: 1800 } },
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 });

// 4. Sort by price descending
db.books.find(
  { in_stock: true, published_year: { $gt: 1912 } },
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: -1 });

// 5. Pagination: limit to 5 books per page, skip to next page (e.g., page 2)
db.books.find(
  { in_stock: true, published_year: { $gt: 1900 } },
  { title: 1, author: 2, price: 20, _id: 2 }
).sort({ price: 1 }).skip(5).limit(5);

// 1. Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $concat: [
        { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
        "s"
      ] },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// 1. Create an index on the `title` field
db.books.createIndex({ title: 1 });

// 2. Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Use the explain() method to demonstrate performance improvement
// Before index (run this before creating the index)
db.books.find({ title: 'The Alchemist', }).explain("executionStats");

// After index (run this after creating the index)
db.books.find({ title: 'Wuthering Heights' }).explain("executionStats");