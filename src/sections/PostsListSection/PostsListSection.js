import React from 'react';
import BlogGridTemplate from '../../templates/BlogGridTemplate';
import BlogPost from '../../components/molecules/BlogPost/BlogPost';
import photo1 from '../../assets/pictures/photo1.png';
import photo2 from '../../assets/pictures/photo2.png';

const posts = [
  {
    photo: '',
    title: 'Lorem ipsum dolor sit amet, consetetur',
    shortContent:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et  accusam et justo duo',
    id: 'a1',
  },
  {
    photo: photo1,
    title: 'Lorem ipsum dolor sit amet, consetetur',
    shortContent:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo',
    id: 'a2',
  },
  {
    photo: photo2,
    title: 'Lorem ipsum sed diam at consetetur',
    shortContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    id: 'a3',
  },
  {
    photo: '',
    title: 'Lorem ipsum sed diam at consetetur',
    shortContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    id: 'a4',
  },
];

const PostsListSection = () => {
  return (
    <BlogGridTemplate>
      {posts.map((post, i) => (
        <BlogPost bigPost={i === 0} title={post.title} shortContent={post.shortContent} photo={post.photo} key={post.id} id={post.id} />
      ))}
    </BlogGridTemplate>
  );
};

export default PostsListSection;
