const Book = require("../model/book");

exports.getbook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("error", error);
        res.status(500).json(error);
    }
};
