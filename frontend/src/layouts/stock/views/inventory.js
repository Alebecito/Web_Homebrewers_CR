import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import InventoryCard from "../components/inventoryCard";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

export default function Inventory() {
  const [inventario, setInventario] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await axios.get(
        `https://homebrewersapis.onrender.com/inventario/getAllInventoryFromUser/${id}`
      );
      let data = res.data[0];
      setInventario(data);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  const parseDate = (date) => {
    let dateArray = date.split("T");
    let dateParsed = dateArray[0];
    return dateParsed;
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <>
        {loading === true ? (
          <MDBox sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress color="secondary" />
          </MDBox>
        ) : (
          <MDBox mt={6}>
            <Grid
              container
              spacing={10}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {inventario.map((producto) => (
                <Grid item xs="auto" md="auto">
                  <InventoryCard
                    productoId={producto.productoGUID}
                    title={producto.titulo}
                    description={producto.cuerpo}
                    quantity={producto.cantidad}
                    date={parseDate(producto.fechaCaducidad)}
                    productImage={producto.fotoProducto}
                  />
                </Grid>
              ))}
            </Grid>
          </MDBox>
        )}
      </>
    </DashboardLayout>
  );
}
