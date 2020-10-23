import React from 'react';
import { FiPower } from 'react-icons/fi';

import { Container, Profile, Header, HeaderContent } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Profile>
            <img
              src="https://avatars0.githubusercontent.com/u/40366139?s=460&u=7f05ec541ae27c49db6df10ccf75cd805e45823d&v=4"
              alt="Paulo Henrique"
            />

            <div>
              <span>Bem vindo,</span>
              <strong>Paulo Henrique</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
