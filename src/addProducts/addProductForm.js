import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import addProductAction from '../Redux/addProduct/action'
import {useDispatch} from 'react-redux'

export default function AddProductForm() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [quantity, setQuantity] = React.useState('')
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddButton = () => {
    const productData = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    }
dispatch(addProductAction(productData))
setOpen(false);
  }

  return (
    <div>
      <Button variant="contained" color='primary' style={{marginBottom:'1rem'}} onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <form>
          <TextField
            margin="dense"
            id="Product Name"
            label="Product Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=> setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="Descripition"
            label="Descripition"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=> setDescription(e.target.value)}
          />
          <TextField
            margin="dense"
            id="Price"
            label="Price"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=> setPrice(e.target.value)}
          />
          <TextField
            margin="dense"
            id="Quantity"
            label="Quantity"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=> setQuantity(e.target.value)}
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
          <Button variant="contained" color='info' onClick={handleClose}>Close</Button>
          <Button variant="contained" color='primary' onClick={handleAddButton}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
