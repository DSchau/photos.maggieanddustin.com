import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled, { css } from 'styled-components';

const Container = styled.div`
`;

const Header = styled.header`
  background-color: #0A1C28;

  padding: 1rem 0;
`;

const Subheader = styled.div`
  background-color: #EEE9D1;
`;

const Title = styled.h1`
  color: #EEE9D1;
  font-size: 24px;
  margin: 0;
  padding: 0;

  text-align: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0.25rem 0;

  overflow-x: scroll;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;

  margin-left: 0.5rem;
  font-size: 14px;
`;

const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  text-decoration-skip: ink;

  &.active {
    text-decoration: underline;
  }
`;

Link.defaultProps = {
  underline: true,
  activeClassName: 'active',
  exact: true
};

function HeaderComponent({ locations = [], title }) {
  return (
    <Container>
      <Header>
        <Title><Link to="/" underline={false}>{title}</Link></Title>
      </Header>
      <Subheader>
        <List>
          {
            locations.map(({ href, label }) => (
              <ListItem key={label}><Link to={href}>{label}</Link></ListItem>
            ))
          }
        </List>
      </Subheader>
    </Container>
  );
}

export { HeaderComponent as Header }