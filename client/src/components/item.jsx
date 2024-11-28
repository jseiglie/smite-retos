import { useState } from "react";
import { Pop } from "./pop";
export const ItemCard = ({ item }) => {
    
    const [selected, setSelected] = useState(false);

  return (
    <>
    <figure id={item.id} className="item-card" 
    //onMouseOver={e=>e.target.id!==selected.id && setSelected(item)} onMouseLeave={()=>setSelected(false)}
        >
      <img
        width={"64px"}
        height={"64px"}
        src={`https://static.smite.guru/i/items/${item.guru_id}.jpg`}
        alt={item.DeviceName}
        />
    </figure>

        {/* <Pop className="item-details" item={item} /> */}
        </>
  );
};
