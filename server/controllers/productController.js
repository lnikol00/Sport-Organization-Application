import Product from "../models/ProductModel.js";

//GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
    const keyword = req.query.keyword
        ? {
            title: {
                $regex: req.query.keyword,
                $options: "i",
            },
        }
        : {};
    const products = await Product.find({ ...keyword })
    res.json(products);
}

//GET SINGLE PRODUCT
export const getSingleProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
}

// CREATE PRODUCT
export const createProduct = async (req, res) => {
    const { title, image, description, price } = req.body;
    const productExist = await Product.findOne({ title });
    if (productExist) {
        res.status(400);
        throw new Error("Product name already exists!")
    }
    else {
        const product = new Product({
            title,
            image,
            description,
            price,
            user: req.user._id
        });
        if (product) {
            const createdProduct = await product.save()
            res.status(201).json(createdProduct);
        } else {
            res.status(400);
            throw new Error("Invalid product data");
        }
    }
}

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.deleteOne();
        res.json({ message: "Product deleted!" });
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
}

// EDIT PRODUCT
export const editProduct = async (req, res) => {
    const { title, image, description, price } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
        product.title = title;
        product.image = image;
        product.description = description;
        product.price = price;

        const updateProduct = await product.save();
        res.status(201).json(updateProduct);
    }
    else {
        res.status(400);
        throw new Error("Product not found");
    }
}