import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from "../database/friend.ts";

const friendsCollections = db.collection("friends_info");

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

const getFriendById = async (ctx: RouterContext) => {
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

const updateFriend = async (ctx: RouterContext) => {
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

const deleteFriend = async (ctx: RouterContext) => {
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

export { getAllFriends, addFriend, getFriendById, updateFriend, deleteFriend };
