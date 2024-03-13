import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddToBookmarks}) => {
    // console.log(blog);
    const {Title,Cover,Reading_Time,Author_img,Author,Posted_Date,Hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={Cover} alt={`Cover picture of the title ${Title}`}></img>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={Author_img}></img>
                    <div className = 'ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_Date}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <span>{Reading_Time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='text-[25px] text-red-600'><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{Title}</h2>
            <p>
                {
                    Hashtags.map((Hashtag,idx) => <span key={idx}><a href=''>{Hashtag}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}
export default Blog;