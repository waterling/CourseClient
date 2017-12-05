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
                    image={__dirname+'resources/1.png'}
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {props.news.title}
                    </Typography>
                    <Typography component="p">
                        Уже совсем скоро. Мы находимся всего в шести неделях от долгожданной премьеры 3 сезона сериала "Мистер Робот", которая состоится 11 октября 2017 года. Это означает, что пришло время освежить память, начиная со второго сезона....

                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{textDecoration: 'none'}} to={props.link+props.news.id}>
                        <Button dense color="primary">
                            {props.textButton}
                        </Button>
                    </Link>
                </CardActions>
            </Card>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleMediaCard);