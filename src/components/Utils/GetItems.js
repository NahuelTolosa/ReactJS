import { products } from "../Data/Products";

export const GetItems = () => {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}

export const GetItemById = (id) => {
    return new Promise((resolve, reject) => {
        resolve(products.find(element => element.id === id));
    });
}