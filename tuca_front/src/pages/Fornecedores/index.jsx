import React, { useEffect, useState } from 'react';
import logo from '../../assets/secador.svg';
import { FaBars, FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Cep from "react-simple-cep-mask";

import './styles.css';
import api from '../../service/api';

export default function Fornecedores() {

    const [nome, setNome] = useState('');
    const [razao_social, setRazao] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [incricao_municipal, setInscricaoMunicipal] = useState('');
    const [inscricao_estadual, setInscricaoEstadual] = useState('');
    const [observacao, setObservacao] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    

    function pesquisaCep() {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(body => {
            setLogradouro(body.logradouro);
            setComplemento(body.complemento);
            setBairro(body.bairro);
        });
    }

    const [fornecedores, setFornecedores] = useState([]);
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        api.get('/fornecedor')
            .then(response => {
                setFornecedores(response.data)
            }) ;
    }, [])
    
    async function handleSubmit(e) {
        e.preventDefault();

        const { status } = await api.post('/fornecedor', {
            nome,
            razao_social,
            cnpj,
            incricao_municipal,
            inscricao_estadual,
            observacao,
            logradouro,
            bairro,
            complemento,
            cidade,
            estado,
            telefone,
            email
        });

        console.log(status);
        // if (status === 201) {
        //     window.location.reload();
        // }
    }

    async function deleteClient(id) {
        api.delete(`/fornecedor/${id}`).then(data => {
            window.location.reload();
        });
    };

    const body = (
        <div className="modal-form">
            <form onSubmit={handleSubmit} className="form-transp">
                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label aria-required>Nome</label>
                            <input onChange={e => setNome(e.target.value)} value={nome} type="text" className="form-control" />
                        </div>
                        <div className="mr-2">
                            <label aria-required>CNPJ</label>
                            <input onChange={e => setCnpj(e.target.value)} value={cnpj} type="text" className="form-control" />
                        </div>
                        <div >
                            <label aria-required>CEP</label>
                            <Cep onBlur={pesquisaCep} onChange={cep => setCep(cep)} value={cep} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label aria-required>Telefone</label>
                            <input onChange={e => setTelefone(e.target.value)} value={telefone} type="text" className="form-control"/>
                        </div>
                        <div className="mr-2">
                            <label aria-required>Insc. Municipal</label>
                            <input onChange={e => setInscricaoMunicipal(e.target.value)} value={incricao_municipal} type="date" className="form-control"/>
                        </div>
                        <div className="mr-2">
                            <label aria-required>Estadual</label>
                            <input onChange={e => setInscricaoEstadual(e.target.value)} value={inscricao_estadual} type="text" className="form-control" placeholder="Inscrição estadual"/>
                        </div>
                    </div>

                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label aria-required>Observação</label>
                            <input onChange={e => setObservacao(e.target.value)} value={observacao} type="text" className="form-control"/>
                        </div>

                    </div>

                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label aria-required>Logradouro</label>
                            <input onChange={e => setLogradouro(e.target.value)} readOnly value={logradouro} type="text" className="form-control"/>
                        </div>
                        <div className="mr-2">
                            <label aria-required>Bairro</label>
                            <input onChange={e => setBairro(e.target.value)} readOnly value={bairro} type="text" className="form-control"/>
                        </div>
                        <div>
                            <label aria-required>Complemento</label>
                            <input onChange={e => setComplemento(e.target.value)} readOnly value={complemento} type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group div-flex">
                        <div className="mr-2">
                            <label aria-required>Cidade</label>
                            <input onChange={e => setCidade(e.target.value)} value={cidade} type="text" className="form-control"/>
                        </div>
                        <div className="mr-2">
                            <label aria-required>Estado</label>
                            <input onChange={e => setEstado(e.target.value)} value={estado} type="text" className="form-control"/>
                        </div>
                        <div>
                            <label aria-required>Email</label>
                            <input onChange={e => setEmail(e.target.value)} value={email} type="text" className="form-control"/>
                        </div>
                    </div>

                    <div className="center-align">
                        <button id="button-subimit" type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(244,121,32,1)' }}>CADASTRAR</button>
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
                <h3>Fornecedores cadastrados <button style={{ width: '5%' }} onClick={() => setOpen(true)} className="btn btn-success"><FaPlus/></button> </h3> 
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
                            <th scope="col">CNPJ</th>
                            <th scope="col">Logradouro</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {fornecedores.map((fornecedor, key) => {
                        return (
                            <tr key={key}>
                                <th scope="row">{fornecedor.nome}</th>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.logradouro}</td>
                                <td>{fornecedor.bairro}</td>
                                <td>{fornecedor.cidade}</td>
                                <td>{fornecedor.estado}</td>
                                <td>{fornecedor.email}</td>
                                <td>{fornecedor.telefone}</td>
                                
                                <td>
                                    <div style={{ display: 'flex' }}>
                                        <button className="btn btn-danger mr-2" onClick={() => deleteClient(fornecedor.id)}><FaTrash/></button> {' '} 
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
