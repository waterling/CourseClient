    import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
    import {Link} from "react-router-dom";

const styles = {
    card: {
        maxWidth: 345,
        maxHeight: 450
    },
    media: {
        height: 200,
    },
};

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={__dirname+'resources/uploads/'+props.news.imgURL}
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {props.news.title}
                    </Typography>
                    <Typography component="p">
                        {props.news.shortText.length>224? props.news.shortText.substring(0,224)+'....':props.news.shortText}
                    </Typography>
                </CardContent>
                <CardActions>
                    {props.buttons.map(item=>{
                        return  <Link to={item.link+props.news.id}>
                            <Button dense color="primary">
                                {item.text}
                            </Button>
                        </Link>;
                    })}

                </CardActions>
            </Card>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleMediaCard);