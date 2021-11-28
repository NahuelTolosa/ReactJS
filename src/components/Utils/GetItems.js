import { products } from "../Data/Products";

export const GetItems = () => {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}