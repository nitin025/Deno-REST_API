import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import friendsCollections from "../database/friend.ts";


const getAllFriends = async (ctx: RouterContext) => {
  const friends = await friendsCollections.find();
  if (friends) {
    ctx.response.status = 200;
    ctx.response.body = {
      success: false,
      data: friends,
    };
  } else {
    ctx.response.status = 400;
    ctx.response.body = {
      success: false,
      msg: "You dont have ay friends",
    };
  }
};

const addFriend = async (ctx: RouterContext) => {
  
};

const getFriendById = async (ctx: RouterContext) => {
  
};

const updateFriend = async (ctx: RouterContext) => {
  
};

const deleteFriend = async (ctx: RouterContext) => {
  
};

export { getAllFriends, addFriend, getFriendById, updateFriend, deleteFriend };
