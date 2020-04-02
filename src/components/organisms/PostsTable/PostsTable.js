import React from 'react';
import { Plus } from 'react-feather';
import TableRow from '../../molecules/TableRow/TableRow';
import { StyledWrapper, StyledHeader, StyledBadge, StyledHeading, StyledButton } from './styles';

const posts = [
  {
    title: 'Tytuł posta',
    id: 'CU5YQNxBp4QVqr1X2bIk',
    createdAt: '30.03.2020 r. 12:34',
  },
  {
    title: 'Lorem ipsum sed diam at consetetur',
    id: 'CU5YQNxBp4QVqr1X2bIk1',
    createdAt: '30.03.2020 r. 12:34',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    id: 'CU5YQNxBp4QVqr1X2bIk2',
    createdAt: '30.03.2020 r. 12:34',
  },
  {
    title: 'Dłuższy tytuł posta',
    id: 'CU5YQNxBp4QVqr1X2bIk3',
    createdAt: '30.03.2020 r. 12:34',
  },
];

const PostsTable = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeading big>
          {' '}
          Posty <StyledBadge> {posts.length} </StyledBadge>{' '}
        </StyledHeading>
        <StyledButton primary autoWidth>
          <Plus size="18" /> Nowy post
        </StyledButton>
      </StyledHeader>
      <div>
        {posts.map((post, i) => (
          <TableRow id={post.id} title={post.title} createdAt={post.createdAt} key={post.id} even={i % 2 === 0} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default PostsTable;
