import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/20773604?s=460&u=36e213219fc47213b4d3a13a80a0e486033d34b1&v=4"
            alt="Clodoaldo Favaro"
          />
          <div>
            <strong>clodoaldofavaro/bolao_faustao</strong>
            <p>O loco meu! Versão para PC do Bolão do Faustão!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/20773604?s=460&u=36e213219fc47213b4d3a13a80a0e486033d34b1&v=4"
            alt="Clodoaldo Favaro"
          />
          <div>
            <strong>clodoaldofavaro/bolao_faustao</strong>
            <p>O loco meu! Versão para PC do Bolão do Faustão!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/20773604?s=460&u=36e213219fc47213b4d3a13a80a0e486033d34b1&v=4"
            alt="Clodoaldo Favaro"
          />
          <div>
            <strong>clodoaldofavaro/bolao_faustao</strong>
            <p>O loco meu! Versão para PC do Bolão do Faustão!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
