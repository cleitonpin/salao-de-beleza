import React, { useEffect, useState } from 'react';
import logo from '../../assets/secador.svg';
import { FaBars, FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cep from "react-simple-cep-mask";
import { Modal } from '@material-ui/core';

import api from '../../service/api';
import './styles.css';

export default function System() {

    
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDtnascimento] = useState('');
    const [email, setEmail] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [sexo, setSexo] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [numero, setNumero] = useState('');

    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);

    function pesquisaCep() {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(body => {
            setLogradouro(body.logradouro);
            setComplemento(body.complemento);
            setBairro(body.bairro);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const { status } = await api.post('/', {
            nome,
            senha,
            data_nascimento: dataNascimento,
            telefone,
            email,
            rg,
            cpf,
            sexo,
            numero,
            logradouro,
            bairro,
            complemento,
            cidade,
            estado,
            cep
        });


        if (status === 201) {
            window.location.reload();
        }
    }

    useEffect(() => {
        api.get('/')
            .then(response => {
                setUsers(response.data)
            }) ;
    }, [])
    
    function deleteClient(id) {
        api.delete(`/${id}`).then(data => {
            window.location.reload();
        });
    };

    const body = (
        <div className="modal-form">
            <form onSubmit={handleSubmit} className="form-transp">
                <div className="form-group div-flex">
                    <div className="mr-2">
                        <label aria-required>Nome</label>
                        <input onChange={e => setNome(e.target.value)} value={nome} type="text" className="form-control" placeholder="Seu nome"/>
                    </div>
                    <div className="mr-2">
                        <label aria-required>Senha</label>
                        <input onChange={e => setSenha(e.target.value)} value={senha} type="password" className="form-control" placeholder="Senha"/>
                    </div>
                    <div className="mr-2">
                        <label aria-required>Email</label>
                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" placeholder="Seu melhor email"/>
                    </div>
                </div>
                <div className="form-group div-flex">
                    <div className="mr-2">
                        <label aria-required>Telefone</label>
                        <input onChange={e => setTelefone(e.target.value)} value={telefone} type="text" className="form-control" placeholder="Fixo, Celular ou Whatsapp"/>
                    </div>
                    <div className="mr-2">
                        <label aria-required>Data de Nascimento</label>
                        <input onChange={e => setDtnascimento(e.target.value)} value={dataNascimento} type="date" className="form-control" placeholder="Data de nascimento"/>
                    </div>
                    <div>
                        <label aria-required>RG</label>
                        <input onChange={e => setRg(e.target.value)} value={rg} type="text" className="form-control" placeholder="RG"/>
                    </div>
                </div>

                <div className="form-group div-flex">
                    <div className="mr-2">
                        <label aria-required maxLength="14">CPF</label>
                        <input onChange={e => setCpf(e.target.value)} value={cpf} type="text" className="form-control" placeholder="CPF"/>
                    </div>
                    <div className="mr-2">
                        <label aria-required>Sexo</label>
                        <select className="custom-select mr-sm-2" onChange={e => setSexo(e.target.value)}>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div>
                        <label aria-required>CEP</label>
                        <Cep  onBlur={pesquisaCep} onChange={cep => setCep(cep)} value={cep} type="text" className="form-control" placeholder="CEP"/>
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
                        <input onChange={e => setCidade(e.target.value)} value={cidade} type="text" className="form-control" placeholder="Cidade"/>
                    </div>
                    <div className="mr-2">
                        <label aria-required>Estado</label>
                        <input onChange={e => setEstado(e.target.value)} value={estado} type="text" className="form-control" placeholder="Estado"/>
                    </div>
                    <div>
                        <label htmlFor="">Número</label>
                        <input onChange={e => setNumero(e.target.value)} value={numero} type="text" className="form-control" placeholder="Número"/>
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
                <h3>Clientes cadastrados <button style={{ width: '5%' }} onClick={() => setOpen(true)} className="btn btn-success"><FaPlus/></button></h3>

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
                            <th scope="col">Telefone</th>
                            <th scope="col">Email</th>
                            <th scope="col">CPF</th>
                            <th scope="col">RG</th>
                            <th scope="col">Logradouro</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, key) => {
                        return (
                            <tr key={key}>
                                <th scope="row">{user.nome}</th>
                                <td>{user.telefone}</td>
                                <td>{user.email}</td>
                                <td>{user.cpf}</td>
                                <td>{user.rg}</td>
                                <td>{user.logradouro}</td>
                                <td>{user.bairro}</td>
                                <td>{user.estado}</td>
                                <td>{user.cidade}</td>
                                
                                <td>
                                    <div style={{ display: 'flex' }}>
                                        <button className="btn btn-danger mr-2" onClick={() => deleteClient(user.id)}><FaTrash/></button> {' '} 
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
