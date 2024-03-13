import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks,spentTimeOnRead}) => {
    return (
        <div className="md:w-1/3 ">
            <div className='bg-gray-300 ml-4 mt-2 rounded-lg'>
            <h3 className='text-center text-2xl'>Spent Time On Read: {spentTimeOnRead} min</h3>
            </div>

            <div className='bg-gray-300 ml-4 mt-2 rounded-lg'>
            <h2 className="text-2xl text-center mt-2 mb-2">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    spentTimeOnRead: PropTypes.number
}
export default Bookmarks;