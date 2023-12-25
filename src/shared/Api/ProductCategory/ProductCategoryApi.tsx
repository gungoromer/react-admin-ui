import { BaseRepository } from "../Abstract/BaseRepository";

class ProductCategoryApi extends BaseRepository {
  constructor() {
    super();
    super.collection = "productcategory";
  }
}

export default ProductCategoryApi;
