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
  },
  {
    photo: photo1,
    title: 'Lorem ipsum dolor sit amet, consetetur',
    shortContent:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo',
  },
  {
    photo: photo2,
    title: 'Lorem ipsum sed diam at consetetur',
    shortContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
  },
  {
    photo: '',
    title: 'Lorem ipsum sed diam at consetetur',
    shortContent: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
  },
];

const PostsListSection = () => {
  return (
    <BlogGridTemplate>
      {posts.map((post, i) => (
        <BlogPost bigPost={i === 0} title={post.title} shortContent={post.shortContent} photo={post.photo} key={i + post.title} />
      ))}
    </BlogGridTemplate>
  );
};

export default PostsListSection;
