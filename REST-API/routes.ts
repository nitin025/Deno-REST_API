import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getAllFriends,
  addFriend,
  getFriendById,
  updateFriend,
  deleteFriend,
} from "./friends.ts";
const router = new Router();

router
  .get("/api/friends", getAllFriends)
  .get("/api/friend/:id", getFriendById)
  .post("/api/friend", addFriend)
  .put("/api/friend/:id", updateFriend)
  .delete("/api/friend/:id", deleteFriend);

export default router;
