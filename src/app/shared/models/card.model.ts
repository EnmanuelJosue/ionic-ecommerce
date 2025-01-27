import { Products } from "src/app/core/models/products.model";

export interface CartItem extends Products {
  quantity?: number;
}
