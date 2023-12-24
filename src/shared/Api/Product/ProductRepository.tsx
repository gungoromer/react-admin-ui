import { BaseRepository } from "../Abstract/BaseRepository";

class UserRepository extends BaseRepository {
  constructor() {
    super();
    super.collection = "product";
  }
}

export default UserRepository;
