import React, { useEffect, useState } from "react";
import Comment from "./comment";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        `http://localhost:5000/comentarios/getAllCommentsFromPublicationNew/${id}`
      );
      let data = res.data[0];
      const dataIndexed = data.map((comment, id) =>
        Object.assign(comment, { id })
      );
      const finalData = dataIndexed.slice(0, 10);
      setComments(finalData);
    };
    fetchData().catch(console.error);
  }, []);

  return <Comment comments={comments} />;
}
