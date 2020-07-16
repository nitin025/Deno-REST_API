import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import friendsCollections from "../database/friend.ts";
interface Friend {
  first_name: string;
  last_name: string;
  place: string;
  dob: string;
  in_relationship: boolean;
}
const getAllFriends = async (ctx: RouterContext) => {
  const friends = await friendsCollections.find();
  if (friends) {
    ctx.response.status = 200;
    ctx.response.body = {
      success: false,
      data: friends,
    };
    return;
  }
  ctx.response.status = 400;
  ctx.response.body = {
    success: true,
    msg: "You dont have ay friends",
  };
};

const addFriend = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { error: "No data available" };
    return;
  }
  const value = await request.body();

  const id = await friendsCollections.insertOne(value.first_name);

  response.status = 200;
  response.body = value;
};

const getFriendById = async (ctx: any) => {
  const data = await friendsCollections.findOne({
    _id: { $oid: ctx.params.id },
  });
  if (!data) {
    ctx.response.status = 400;
    ctx.response.body = { msg: "You dont have any friend with given id" };
    return;
  }
  ctx.response.status = 200;
  ctx.response.body = data;
};

const updateFriend = async (ctx: any) => {
  //const { value } = await ctx.request.body();

  await friendsCollections.updateOne(
    { _id: { $oid: ctx.params.id } },
    { $set: { in_relationship: true } }
  );

  ctx.response.status = 200;
  ctx.response.body = { message: "Updated Succesfully" };
};

const deleteFriend = async (ctx: any) => {
  const count = await friendsCollections.deleteOne({
    _id: { $oid: ctx.params.id },
  });
  if (!count) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Friend does not exist" };
    return;
  }

  ctx.response.status = 204;
  ctx.response.body = { message: "Deleted Succesfully" };
};

export { getAllFriends, addFriend, getFriendById, updateFriend, deleteFriend };
