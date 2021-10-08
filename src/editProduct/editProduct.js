import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { editProductAction } from "../Redux/addProduct/action";

const EditProduct = (props) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const dispatch = useDispatch()
  const editData = useSelector((state)=>{
      return state
  })

  const handleClickOpen = () => {
    setOpen(true);
     editData.addProduct.list.map((item)=>{
         if(item.id === props.pId){
            setName(item.data.name)
            setDescription(item.data.description)
            setPrice(item.data.price)
            setQuantity(item.data.quantity)
            return null
         }
         return null
     })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (pId) => {
    const productData = {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
      }
      dispatch(editProductAction(productData, pId))
      setOpen(false);
  };
  return (
    <>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "1rem" }}
          onClick={handleClickOpen}
        >
          edit
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                margin="dense"
                id="Product Name"
                label="Product Name"
                type="text"
                fullWidth
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="dense"
                id="Descripition"
                label="Descripition"
                type="text"
                fullWidth
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                margin="dense"
                id="Price"
                label="Price"
                type="text"
                fullWidth
                variant="outlined"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                margin="dense"
                id="Quantity"
                label="Quantity"
                type="text"
                fullWidth
                variant="outlined"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              {/* <TextField
            margin="dense"
            id="Image"
            type="file"
            fullWidth
            variant="outlined"
          /> */}
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="info" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(props.pId)}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default EditProduct;
