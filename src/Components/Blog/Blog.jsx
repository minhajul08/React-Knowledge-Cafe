import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handelAddToBookmark, handleMarkAsRead}) => {
    const {Id,Title,Cover,Author,Posted_Date,Author_img,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={Cover} alt={`Cover picture of the title ${Title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={Author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p> {Posted_Date}</p>
                    </div>
                </div>
                <div>
                     <span>{reading_time}min read</span>
                     <button 
                     onClick={() => handelAddToBookmark (blog)}
                     className='ml-2 text-red-600'>
                     <FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl'>{Title} </h2>
            <p>
                {
                    hashtags.map ((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(Id,reading_time)}
                className='text-purple-800 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handelAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;