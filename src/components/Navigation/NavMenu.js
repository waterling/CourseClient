import React from 'react';
import {MenuList, MenuItem} from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import Grow from 'material-ui/transitions/Grow';
import {Manager, Target, Popper} from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import {AppBar, Button, Divider, Menu} from "material-ui";
import Avatar from 'material-ui/Avatar';
import * as cookie from "react-cookies";
import PropTypes from "prop-types";
import Hidden from 'material-ui/Hidden';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';


const drawerWidth = 240;
const styles = theme => ({
    root: {
        width: '100%',
        height: 430,
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
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
        mobileOpen: false,
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    handleClick = () => {
        if (this.state.open) {
            this.setState({open: false, display: "none"});

        }
        this.setState({open: true, display: "block"});
    };
    logout = () => {
        this.handleRequestClose();
        cookie.remove('user');

    };

    handleRequestClose = () => {
        this.setState({open: false, display: "none", anchorEl: null});
    };

    render() {


        const {classes} = this.props;
        const {open, display, anchorEl} = this.state;
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
        const drawer = (
            <div>
                <div>
                    {cookie.load('user')
                        ? <div className={classes.last}>
                            <Link to="/user">
                                <Avatar alt="You" src="/image/default-avatar.jpg" onClick={this.handleMenu}/>
                            </Link>

                        </div>
                        : <Link to="/login">
                            <Button raised color="primary" className={classes.last}>
                                Войти
                            </Button>
                        </Link>}
                </div>
                <MenuList className={classes.menu}>
                    <Link to={'/'}>
                        <MenuItem>
                            Главная
                        </MenuItem>
                    </Link>
                    <Link to={'/news'}>
                        <MenuItem>
                            Новости
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        Смотреть онлайн
                    </MenuItem>
                    <Divider/>
                    <Link to={'/online/1'}>
                        <MenuItem>
                            &nbsp;&nbsp;&nbsp;&nbsp;1 сезон
                        </MenuItem>
                    </Link>
                    <Link to={'/online/2'}>
                        <MenuItem>
                            &nbsp;&nbsp;&nbsp;&nbsp;2 сезон
                        </MenuItem>
                    </Link>
                    <Link to={'/online/3'}>
                        <MenuItem>
                            &nbsp;&nbsp;&nbsp;&nbsp;3 сезон
                        </MenuItem>
                    </Link>
                    <Divider/>
                    <Link to={'/chars'}>
                        <MenuItem>
                            Персонажи
                        </MenuItem>
                    </Link>
                    <Link to={'/orgs'}>
                        <MenuItem>
                            Персонажи
                        </MenuItem>
                    </Link>
                    <Link to={'/map'}>
                        <MenuItem>
                            Карта
                        </MenuItem>
                    </Link>
                    <a href="http://localhost:3000" style={a}>
                        <MenuItem className={classes.menuItem}>
                            Магазин
                        </MenuItem>
                    </a>
                    <Divider/>
                    {cookie.load('user')
                        ?
                        <MenuItem onClick={this.logout}>
                            Выйти
                        </MenuItem>
                        :
                        <Link to={'/login'}>
                            <MenuItem >
                                Войти
                            </MenuItem>
                        </Link>
                    }
                </MenuList>
            </div>
        );
        return (
            <div>
                <div className="nav-menu">
                    <AppBar>
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
                                            Смотреть онлайн
                                        </MenuItem>
                                    </Target>

                                    <Link to="/chars" style={a}>
                                        <MenuItem className={classes.menuItem}>
                                            Персонажи
                                        </MenuItem>
                                    </Link>

                                    <Link to="/orgs">
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
                                        ? <div className={classes.last}>
                                            <Avatar alt="You" src="/image/default-avatar.jpg" onClick={this.handleMenu}/>
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
                </div>

                <div className="nav-menu-mobile">
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            type="temporary"
                            open={this.state.mobileOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onRequestClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown implementation="css">
                        <Drawer
                            type="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </div>
            </div>



        );
    }

}

NavMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles)(NavMenu);