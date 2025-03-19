import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PostItem from './PostItem';


const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>Посты не были найдены</h1>
    );
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>

      <TransitionGroup className='todo-list'>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            nodeRef={post.nodeRef}
            timeout={500}
            classNames='post'
          >
            <div ref={post.nodeRef}>
              <PostItem
                remove={remove}
                number={index + 1}
                post={post}
              />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;

