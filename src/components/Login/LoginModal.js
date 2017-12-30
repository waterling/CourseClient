import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Login from "./Login";
import LoginForm from "./LoginForm";

export default class FormDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            open: nextProps.open,
        })
    }
    handleBackdropClick=()=>{
        this.setState({ open: false });
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent>
                        <Login/>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
