import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Divider,
} from "@material-ui/core";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import "./news_image.css";

const News_Image = ({image, ...props}) => {
  const [img, setImg] = useState(image);
  const inputReference = React.createRef();

  const fileUploadAction = () => {
    inputReference.current.click();
  };

  const imageHandler = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Card>
      <CardContent>
        <MDBox
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
          {...props}
        >
          <Avatar src={img} variant="square" id="avatar" />
        </MDBox>
      </CardContent>
      <Divider />
      <CardActions>
        <MDButton
          color="secondary"
          fullWidth
          variant="text"
          onClick={fileUploadAction}
        >
          Elegir imagen
        </MDButton>
        <input
          type="file"
          id="image"
          accept="image/*"
          ref={inputReference}
          onChange={imageHandler}
          style={{ display: "none" }}
        />
      </CardActions>
    </Card>
  );
};

export default News_Image;
