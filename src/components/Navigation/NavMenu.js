import React from 'react';
import {MenuList, MenuItem} from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import Grow from 'material-ui/transitions/Grow';
import {Manager, Target, Popper} from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import {AppBar, Button, Menu} from "material-ui";
import Avatar from 'material-ui/Avatar';
import * as cookie from "react-cookies";

const styles = theme => ({
    last: {
        marginLeft: 100,
        margin: theme.spacing.unit
    },
    menuItem: {
        '&:focus': {
            background: theme.palette.primary[100],
            '& $text, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    text: {},
    icon: {},
});

class NavMenu extends React.Component {
    state = {
        open: false,
        display: "none",
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };


    handleClick = () => {
        if (this.state.open) {
            this.setState({open: false, display: "none"});

        }
        this.setState({open: true, display: "block"});
    };
    logout=()=>{
        this.handleRequestClose();
        cookie.remove('user');

    };

    handleRequestClose = () => {
        this.setState({open: false, display: "none", anchorEl: null});
    };

    render() {
        const {classes} = this.props;
        const {open,display,anchorEl} = this.state;
        const menuOpen = Boolean(anchorEl);
        const flexContainer = {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
            justifyContent: 'center',
            margin: 'auto'
        };
        const a = {
            textDecoration: 'none', /* Отменяем подчеркивание у ссылки */
        };
        return (
            <AppBar >
                <Paper>
                    <Manager>
                        <MenuList style={flexContainer} className={classes.menu}>
                            <Link to="/" style={a}>
                                <MenuItem className={classes.menuItem}>
                                    Главная
                                </MenuItem>
                            </Link>
                            <Link to="/news" style={a}>
                                <MenuItem className={classes.menuItem}>
                                    Новости
                                </MenuItem>
                            </Link>
                            <Target>
                                <MenuItem className={classes.menuItem} aria-owns={this.state.open ? 'menu-list' : null}
                                          aria-haspopup="true"
                                          onClick={this.handleClick}>
                                    Онлайн
                                </MenuItem>
                            </Target>

                            <Link to="/chars" style={a}>
                                <MenuItem className={classes.menuItem}>
                                    Персонажи
                                </MenuItem>
                            </Link>

                            <Link to="/organizations" style={a}>
                                <MenuItem className={classes.menuItem}>
                                    Организации
                                </MenuItem>
                            </Link>
                            <Link to="/map" style={a}>
                                <MenuItem className={classes.menuItem}>
                                    Карта
                                </MenuItem>
                            </Link>
                            <a href="http://localhost:3000" style={a}>
                                <MenuItem className={classes.menuItem}>
                                    Магазин
                                </MenuItem>
                            </a>
                            {cookie.load('user')
                                ?
                                    <div className={classes.last}>
                                        <Avatar alt="You" src="/image/default-avatar.jpg"  onClick={this.handleMenu}/>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={menuOpen}
                                            onRequestClose={this.handleRequestClose}
                                        >
                                            <Link to="/user">
                                                <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
                                            </Link>
                                            <MenuItem onClick={this.logout.bind(this)}>Log out</MenuItem>
                                        </Menu>
                                    </div>

                                : <Link to="/login">
                                <Button raised color="primary" className={classes.last}>
                                    Войти
                                </Button>
                            </Link>}

                        </MenuList>

                        <Popper
                            placement="bottom-start"
                            eventsEnabled={open}
                            className={classNames({[classes.popperClose]: !open})}
                            style={{display: display}}
                        >
                            <ClickAwayListener onClickAway={this.handleRequestClose}>
                                <Grow in={open} id="menu-list" style={{transformOrigin: '0 0 0'}}>
                                    <Paper>
                                        <MenuList role="menu">
                                            <Link style={a} to="/online/1"><MenuItem onClick={this.handleRequestClose}>1
                                                сезон</MenuItem></Link>
                                            <Link style={a} to="/online/2"><MenuItem onClick={this.handleRequestClose}>2
                                                сезон</MenuItem></Link>
                                            <Link style={a} to="/online/3"><MenuItem onClick={this.handleRequestClose}>3
                                                сезон</MenuItem></Link>
                                        </MenuList>
                                    </Paper>
                                </Grow>
                            </ClickAwayListener>
                        </Popper>
                    </Manager>


                </Paper>
            </AppBar>

        );
    }

}


export default withStyles(styles)(NavMenu);