import RenderListSong from "./RenderListSong";
import mystress from "./Image/mystress.jpg";
import mirage from "./Image/mirage.jpg";
import mystress2 from "./Image/mystress2.jpg";
import thehills from "./Image/thehills.png";
import paralyzed from "./Image/paralyzed.jpg";
import timeless from "./Image/timeless.jpg";

interface IUser {
  picture: string;
  name: string;
  singer: string;
  time: string;
}

function ListSong() {
  const arr: Array<IUser> = [
    {
      picture: mystress,
      name: "My Stress",
      singer: "NF Real music",
      time: "3:22",
    },

    {
      picture: mirage,
      name: "Mirage",
      singer: "Else Twin",
      time: "4:23",
    },

    {
      picture: mystress2,
      name: "My Stress",
      singer: "NF Real music",
      time: "3:58",
    },

    {
      picture: thehills,
      name: "The Hills",
      singer: "The Weekend",
      time: "5:33",
    },
    {
      picture: paralyzed,
      name: "Paralyzed",
      singer: "NF Real music",
      time: "5:08",
    },
    {
      picture: timeless,
      name: "Timeless",
      singer: "Lucidious",
      time: "3:50",
    },
  ];

  return (
    <div>
      {arr?.map((user: IUser) => (
        <RenderListSong key={user?.name} userProps={user} />
      ))}
    </div>
  );
}
export default ListSong;
