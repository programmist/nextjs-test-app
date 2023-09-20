export interface Product {
  id?: number;
  name: string;
  price: number;
}

let products: Product[] = [
  { id: 1, name: "Milk", price: 4.0 },
  { id: 2, name: "Bread", price: 2.5 },
  { id: 3, name: "Peanut Butter", price: 3.39 },
  { id: 4, name: "Cheese", price: 5.0 },
];

const productService = {
  getAll() {
    return products;
  },
  get(id: number) {
    return products.find((p) => p.id === id);
  },
  create(product: Product) {
    products.push(product);
    return product;
  },
  update(product: Product, id: number) {
    products = products.map((p) => (p.id === id ? { ...p, ...product } : p));
    return this.get(id);
  },
  delete(id: number) {
    products = products.filter((p) => p.id !== id);
  },
  nextId() {
    return products.length + 1;
  },
  hasProduct(id: number) {
    return this.get(id) != null;
  },
};

export default productService;
