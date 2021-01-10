import React, { useEffect, useState } from 'react';
import logo from '../../assets/secador.svg';
import { FaBars, FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../service/api';

export default function System() {

    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        api.get('/')
            .then(response => {
                setUsers(response.data)
            }) ;
    }, [])
    
    async function deleteClient(id) {
        api.delete(`/${id}`).then(data => {
            window.location.reload();
        });
    };

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
                                    <Link to="#">Fornecedores</Link>
                                    <Link to="#">Funcionarios</Link>
                                    <Link to="/admin/private">Clientes</Link>
                                    <Link to="/admin/servicos">Serviços</Link>
                                </li>
                                    
                            </ul>
                        </div>
                    </div>
                </nav>
            
            <div className="container dados">
                <h3>Clientes cadastrados </h3>
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
