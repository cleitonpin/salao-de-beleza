import React, { useEffect, useState } from 'react';
import logo from '../../assets/secador.svg';
import { FaBars, FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';

import './styles.css';
import api from '../../service/api';

export default function Servico() {

    const [nome, setNome] = useState('');
    const [duracao_maxima, setDuracao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const [servicos, setServicos] = useState([]);
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        api.get('/servico')
            .then(response => {
                setServicos(response.data)
            }) ;
    }, [])
    
    async function handleSubmit(e) {
        e.preventDefault();

        const { status } = await api.post('/servico', {
            nome,
            duracao_maxima,
            descricao,
            valor
        });

        if (status === 201) {
            window.location.reload();
        }
    }

    async function deleteClient(id) {
        api.delete(`/servico/${id}`).then(data => {
            window.location.reload();
        });
    };

    const body = (
        <div className="modal-form">
            <form onSubmit={handleSubmit} className="form-transp">
                <div className="form-group div-flex">
                    <div>
                        <label aria-required>Nome</label>
                        <input onChange={e => setNome(e.target.value)} value={nome} type="text" className="form-control" placeholder="Nome do serviço"/>
                    </div>
                    <div>
                        <label aria-required>Duração Máxima</label>
                        <input onChange={e => setDuracao(e.target.value)} value={duracao_maxima} type="text" className="form-control" placeholder="Duração"/>
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <label aria-required>Descrição</label>
                        <input onChange={e => setDescricao(e.target.value)} value={descricao} type="text" className="form-control" placeholder="Descrição do serviço"/>
                    </div>
                    <div>
                        <label aria-required>Valor</label>
                        <input onChange={e => setValor(e.target.value)} value={valor} type="text" className="form-control" placeholder="Valor"/>
                    </div>
                </div>

                
                <div className="center-align">
                    <button id="button-subimit" type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(212,121,32,1)' }}>CADASTRAR!</button>
                </div>
            </form>
        </div>
    );

    return (
        <>
            <div>
                <nav>
                    <div className='nav-center'>
                        <div className='nav-header'>
                            <img src={logo} className='logo' alt='logo' />
                            <button className='nav-toggle'>
                                <FaBars />
                            </button>
                        </div>
                        <div className='links-container'>
                            <ul className='links'>
                                
                                <li>
                                    <Link to="/admin/fornecedores">Fornecedores</Link>
                                    <Link to="/admin/funcionarios">Funcionarios</Link>
                                    <Link to="/admin/private">Clientes</Link>
                                    <Link to="/admin/servicos">Serviços</Link>
                                </li>
                                    
                            </ul>
                        </div>
                    </div>
                </nav>
            
            <div className="container dados">
                <h3>Serviços cadastrados <button style={{ width: '5%' }} onClick={() => setOpen(true)} className="btn btn-success"><FaPlus/></button> </h3> 
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    {body}
                </Modal>
                
                <table className="table table-striped table-bordered center">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Duração máxima</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {servicos.map((servico, key) => {
                        return (
                            <tr key={key}>
                                <th scope="row">{servico.nome}</th>
                                <td>{servico.duracao_maxima}</td>
                                <td>{servico.descricao}</td>
                                <td>{servico.valor}</td>
                                
                                <td>
                                    <div style={{ display: 'flex' }}>
                                        <button className="btn btn-danger mr-2" onClick={() => deleteClient(servico.id)}><FaTrash/></button> {' '} 
                                        <Link to="/admin/edit" className="btn btn-warning mr-2" ><FaPen/></Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            </div>

        </>
    )
}
