import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import {
  Container,
  Profile,
  Header,
  HeaderContent,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/40366139?s=460&u=7f05ec541ae27c49db6df10ccf75cd805e45823d&v=4"
                alt="Paulo Henrique"
              />

              <strong>Paulo Henrique</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/40366139?s=460&u=7f05ec541ae27c49db6df10ccf75cd805e45823d&v=4"
                  alt="Paulo Henrique"
                />

                <strong>Paulo Henrique</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/40366139?s=460&u=7f05ec541ae27c49db6df10ccf75cd805e45823d&v=4"
                  alt="Paulo Henrique"
                />

                <strong>Paulo Henrique</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/40366139?s=460&u=7f05ec541ae27c49db6df10ccf75cd805e45823d&v=4"
                  alt="Paulo Henrique"
                />

                <strong>Paulo Henrique</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
