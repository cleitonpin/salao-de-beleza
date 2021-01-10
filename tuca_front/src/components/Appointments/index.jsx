import React, { useState, useEffect } from 'react';

import api from '../../service/api';

import './styles.css';

export default function Appointments() {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [servico, setServico] = useState(null);
    const [servicoList, setServicoList] = useState([]);

    function cleanValues() {
        setNome('');
        setData('');
        setHora('');
    }

    function handleSubmitForm(e) {
        e.preventDefault();

        const response = api.post('/agendar', {
            data,
            nome_cliente: nome,
            horario: hora,
            servico_id: servico,
            confirmado: true
        });

        console.log(response.data);
        alert('Agendamento realizado com sucesso!');
        cleanValues();
    }

    useEffect(() => {
        api.get('servico')
            .then(resp => setServicoList(resp.data));
    }, []);

    return (
        <section className='section' id='agendamentos' style={{ marginTop: 50 }}>
            <div className='title'>
                <h2>
                    <span>/</span>Agendar
                </h2>
            </div>
            <div>
                <form action="">
                    <h2>Agende seu horário</h2>

                    <div className="input">
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <label>Nome</label>
                    </div>

                    <div className="input">
                        <input
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                        <label>Data</label>
                    </div>

                    <div className="input">
                        <input
                            type="time"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                        />
                        <label>Horário</label>
                    </div>

                    <div className="select">
                        <label>Serviços</label>
                        <select onChange={(e) => setServico(e.target.value)}>
                            <option value={null}>--</option>
                            {servicoList.map((serv) => (
                                <option key={serv.id} value={serv.id}>{serv.nome}</option>
                            ))}
                        </select>
                    </div>

                    <button className='submit-button' onClick={handleSubmitForm}>Agendar</button>
                </form>
            </div>
        </section>
    );
}
