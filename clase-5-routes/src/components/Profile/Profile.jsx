import React, { useEffect, useState } from "react";
import { getDataUser } from "../services/api";

function Profile({ data }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data) {
      getDataUser(data.token).then((info) => {
        console.log(info);
        setData(info);
      });
    }
  }, []);
  return (
    <div>
      <article>
        <h3>
          {data.firstName} {data.lastName}
        </h3>
        <p>{data.university}</p>
      </article>
    </div>
  );
}

export default Profile;
