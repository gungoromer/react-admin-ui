import { BaseRepository } from "../Abstract/BaseRepository";

class ProductCategoryApi extends BaseRepository {
  constructor() {
    super();
    super.collection = "product";
  }
}

export default ProductCategoryApi;
