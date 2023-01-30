export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params)=>{
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
    }
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "snow1@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Lanister",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "lan@gmail.com",
    age: 40,
  },
  {
    id: 3,
    username: "Jamie",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "jam@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Targayran",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "tar@gmail.com",
    age: 22,
  },
  {
    id: 5,
    username: "Daemond",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "snow1@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Snow",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "snow1@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Snow",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "snow1@gmail.com",
    age: 35,
  },
  {
    id: 8,
    username: "Eliabeth",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "liz@gmail.com",
    age: 39,
  },
  {
    id: 9,
    username: "Ban",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "ban@gmail.com",
    age: 45,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "rox@gmail.com",
    age: 65,
  },
];
