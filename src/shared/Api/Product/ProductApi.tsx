import { BaseRepository } from "../Abstract/BaseRepository";

class ProductApi extends BaseRepository {
  constructor() {
    super();
    super.collection = "product";
  }
}

export default ProductApi;
