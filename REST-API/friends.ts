import { Friend } from "./Friend.ts";

let friends: Friend[] = [
  {
    id: "1",
    first_name: "Aditya",
    last_name: "Limbekar",
    place: "Kolhapur",
    dob: "",
    in_relationship: false,
  },
  {
    id: "2",
    first_name: "Aishwarya",
    last_name: "Kuratti",
    place: "Belgaum",
    dob: "",
    in_relationship: true,
  },
  {
    id: "3",
    first_name: "Ankita",
    last_name: "Bajantri",
    place: "Belgaum",
    dob: "",
    in_relationship: true,
  },
  {
    id: "4",
    first_name: "Diana",
    last_name: "Dsouza",
    place: "Belgaum",
    dob: "",
    in_relationship: true,
  },
  {
    id: "5",
    first_name: "Harshvardhan",
    last_name: "Patil",
    place: "Hebbal",
    dob: "",
    in_relationship: true,
  },
  {
    id: "6",
    first_name: "Nikita",
    last_name: "Bhavi",
    place: "Raibag",
    dob: "",
    in_relationship: true,
  },
  {
    id: "7",
    first_name: "Nikita",
    last_name: "Oulkar",
    place: "Belgaum",
    dob: "",
    in_relationship: false,
  },
  {
    id: "8",
    first_name: "Prachi",
    last_name: "Khandake",
    place: "Nippani",
    dob: "",
    in_relationship: true,
  },
  {
    id: "9",
    first_name: "Durgesh",
    last_name: "Nandan",
    place: "Patna",
    dob: "",
    in_relationship: true,
  },
];

const getAllFriends = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: friends,
  };
};

const getFriendById = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const friend: Friend | undefined = friends.find((p) => p.id === params.id);
  if (friend) {
    response.status = 200;
    response.body = {
      success: true,
      data: friend,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No friend found with given id",
    };
  }
};

const addFriend = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const friend: Friend = body.value;
    console.log(friend);
    friends.push(friend);
    response.status = 201;
    response.body = {
      success: true,
      data: friend,
    };
  }
};

const updateFriend = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const friend: Friend | undefined = friends.find((p) => p.id === params.id);
  if (friend) {
    const body = await request.body();
    const updateData: {
      first_name: string;
      last_name: string;
      place: string;
      dob: string;
      in_relationship: boolean;
    } = body.value;

    friends = friends.map((p) =>
      p.id === params.id ? { ...p, ...updateFriend } : p
    );
    response.status = 200;
    response.body = {
      success: true,
      data: friends,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No friend found with given id",
    };
  }
};

const deleteFriend = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  friends = friends.filter((p) => p.id !== params.id);
  response.status = 404;
  response.body = {
    success: true,
    msg: "Friend Deleted",
  };
};

export { getAllFriends, addFriend, getFriendById, updateFriend, deleteFriend };
