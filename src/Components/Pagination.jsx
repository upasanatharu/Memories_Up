import React, {useEffect} from "react";
import { Pagination, PaginationItem } from '@material-ui/lab';
import useStyles from './styles';
import { Link } from "react-router-dom";
import { getPosts } from "../actions/posts";
import { useDispatch, useSelector } from "react-redux";

const Paginate = ({ page }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {numberofpages} = useSelector((state) => state.posts)

    useEffect(() => {
        if(page) dispatch(getPosts(page))
    },[page,dispatch])

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberofpages}
            page={Number(page)|| 1}
            variant='outlined'
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    );
};

export default Paginate;