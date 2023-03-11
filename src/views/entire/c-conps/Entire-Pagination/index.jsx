import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useDispatch} from 'react-redux';
import { fetchEntireDataAction } from '@/store/modules/entire';
const EntirePagination = memo((props) => {
    const { totalCount, currentPage } = props;

    const dispatch = useDispatch();
    const startCount = (currentPage * 20) + 1;
    const endCount = (currentPage + 1) * 20;
    const totalPage = Math.ceil(totalCount / 20);

    const pageChangeHandle = (event, pageCount) => {
        window.scrollTo(0, 0);
        const requestCount = pageCount - 1;
        dispatch(fetchEntireDataAction(requestCount));
    }

    return (
        <EntirePaginationWrapper>
            <div className="info">
                <Pagination count={totalPage} size="large" onChange={pageChangeHandle} />
                <div className="desc">
                    第{startCount} - {endCount}个房源，共超过{totalCount}个
                </div>
            </div>
        </EntirePaginationWrapper>
    )
})

EntirePagination.propTypes = {
    currentPage: PropTypes.number,
    totalCount: PropTypes.number
}

export default EntirePagination