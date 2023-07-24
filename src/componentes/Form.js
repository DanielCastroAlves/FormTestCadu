import React, { useState } from 'react';
import TextInput from './TextInput';
import DropdownInput from './DropdownInput';
import Tabela from './Tabela';

import '../App.css';

const YOUR_DATA = [
  {
    ordemServico: 'OS001',
    designacao: 'Designação 1',
    atencao: 'Sim',
    observacao: 'Primeira observação',
    configuracaoServico: 'Sim',
    projetoRedeBasica: 'Não',
    projetoRedeAcesso: 'Sim',
    agendarInstalacao: 'Sim',
    instalacaoAgendada: 'Não',
    previsaoConclusao: '15/08/2023',
    previsaoInstalacao: '20/08/2023',
    dataInstalacao: '25/08/2023',
  },
  {
    ordemServico: 'OS002',
    designacao: 'Designação 2',
    atencao: 'Não',
    observacao: 'Segunda observação',
    configuracaoServico: 'Sim',
    projetoRedeBasica: 'Sim',
    projetoRedeAcesso: 'Não',
    agendarInstalacao: 'Sim',
    instalacaoAgendada: 'Sim',
    previsaoConclusao: '25/08/2023',
    previsaoInstalacao: '30/08/2023',
    dataInstalacao: '05/09/2023',
  },
  {
    ordemServico: 'OS003',
    designacao: 'Designação 3',
    atencao: 'Sim',
    observacao: 'Terceira observação',
    configuracaoServico: 'Sim',
    projetoRedeBasica: 'Não',
    projetoRedeAcesso: 'Sim',
    agendarInstalacao: 'Sim',
    instalacaoAgendada: 'Sim',
    previsaoConclusao: '20/08/2023',
    previsaoInstalacao: '25/08/2023',
    dataInstalacao: '30/08/2023',
  },
  {
    ordemServico: 'OS004',
    designacao: 'Designação 4',
    atencao: 'Sim',
    observacao: 'Quarta observação',
    configuracaoServico: 'Não',
    projetoRedeBasica: 'Sim',
    projetoRedeAcesso: 'Não',
    agendarInstalacao: 'Não',
    instalacaoAgendada: 'Não',
    previsaoConclusao: '10/08/2023',
    previsaoInstalacao: '15/08/2023',
    dataInstalacao: '20/08/2023',
  },
];
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dropdownValue: '',
  });

  const [filteredData, setFilteredData] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredData = YOUR_DATA.filter(item => {
      return (
        item.designacao.toLowerCase().includes(formData.name.toLowerCase()) &&
        item.ordemServico.toLowerCase().includes(formData.email.toLowerCase()) &&
        (formData.dropdownValue === '' || item.atencao === formData.dropdownValue)
        // Adicione outras condições de filtragem se necessário
      );
    });

    setFilteredData(filteredData);
  };

  const handleClearFilters = () => {
    setFormData({
      name: '',
      email: '',
      dropdownValue: '',
    });
    setFilteredData(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Consulta por designação circuito"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="input-name"
        />

        <TextInput
          label="Ordem de serviço"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="input-email"
        />

        <div>
          <DropdownInput
            label="Status"
            name="dropdownValue"
            value={formData.dropdownValue}
            onChange={handleInputChange}
            options={['Opção 1', 'Opção 2', 'Opção 3']} // Substitua pelas opções reais
            className="input-dropdown"
          />
        </div>

        <button type="submit">Pesquisar</button>
        <button type="button" onClick={handleClearFilters}>Limpar filtros</button>
      </form>
      {filteredData ? <Tabela data={filteredData} /> : <Tabela data={YOUR_DATA} />}
    </>
  );
}

export default Form;