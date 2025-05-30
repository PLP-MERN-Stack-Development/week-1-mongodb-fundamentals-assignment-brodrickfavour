# 📚 PLP Bookstore – MongoDB Fundamentals Assignment

Hi! I’m Brodrick Favour, and this repository contains my solutions for the Week 1 MongoDB Fundamentals assignment. In this project, I designed and implemented a simple bookstore database using MongoDB, performed CRUD operations, wrote advanced queries, built aggregation pipelines, and created indexes for performance optimization.

## 🚀 What I Did

- **Set up a MongoDB database** called `plp_bookstore` with a `books` collection.
- **Populated the collection** with at least 10 sample book documents using `insert_books.js`.
- **Wrote and tested queries** for finding, updating, and deleting books.
- **Implemented advanced queries** with projection, sorting, and pagination.
- **Created aggregation pipelines** to analyze book data (average price by genre, most prolific author, books per decade).
- **Added indexes** to improve search performance and demonstrated their effect using `explain()`.

---

## 🛠️ How to Set Up and Run

### 1. Clone This Repository
```sh
git clone https://github.com/BrodrickFavour/week-1-mongodb-fundamentals-assignment-brodrickfavour.git
cd week-1-mongodb-fundamentals-assignment-brodrickfavour
```

### 2. Install MongoDB
- **Local:** [Download MongoDB Community Edition](https://www.mongodb.com/try/download/community) and follow the installation guide for your OS.
- **Cloud (Atlas):** [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free cluster.

### 3. Install Node.js (if you don’t have it)
- Download and install from [nodejs.org](https://nodejs.org/).

### 4. Populate the Database
- Open your terminal and start the MongoDB shell (`mongosh`).
- Switch to the `plp_bookstore` database:
  ```sh
  use plp_bookstore
  ```
- Insert the sample data:
  - **Option 1:** Run the script directly:
    ```sh
    mongosh < insert_books.js
    ```
  - **Option 2:** Copy and paste the contents of `insert_books.js` into the shell.

### 5. Run My Queries
- Open `queries.js` and copy-paste the queries into your MongoDB shell, or try them one by one in MongoDB Compass.

### 6. Explore with MongoDB Compass (Optional)
- Download [MongoDB Compass](https://www.mongodb.com/try/download/compass).
- Connect to your local or Atlas cluster.
- Browse the `plp_bookstore` database and check out the `books` collection.

### 7. Submission Checklist
- Make sure `insert_books.js` and `queries.js` are complete and committed.
- Add a screenshot of your database in Compass or Atlas.
- Push all changes to your GitHub Classroom repository.
