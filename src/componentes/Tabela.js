import React from 'react';
import "../App.css";

const Tabela = ({ data }) => {
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Ordem de serviço</th>
          <th>Designação</th>
          <th>Atenção</th>
          <th>Observação</th>
          <th>Configuração do serviço</th>
          <th>Projeto de rede básica</th>
          <th>Projeto de rede de acesso</th>
          <th>Agendar instalação</th>
          <th>Instalação agendada</th>
          <th>Previsão de conclusão da etapa</th>
          <th>Previsão de instalação</th>
          <th>Data de instalação</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ordemServico}</td>
            <td>{item.designacao}</td>
            <td>{item.atencao}</td>
            <td>{item.observacao}</td>
            <td>{item.configuracaoServico}</td>
            <td>{item.projetoRedeBasica}</td>
            <td>{item.projetoRedeAcesso}</td>
            <td>{item.agendarInstalacao}</td>
            <td>{item.instalacaoAgendada}</td>
            <td>{item.previsaoConclusao}</td>
            <td>{item.previsaoInstalacao}</td>
            <td>{item.dataInstalacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
