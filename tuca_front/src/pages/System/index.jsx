import React, { useEffect, useState } from 'react';
import logo from '../../assets/secador.svg';
import { FaBars } from 'react-icons/fa';
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
    console.log(users);
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
                                    <Link to="#">Clientes</Link>
                                </li>
                                    
                            </ul>
                        </div>
                    </div>
                </nav>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Nomes</th>
                            <th scope="col">Email</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, key) => {
                                    return (
                                        <tr key={key}>
                                            <th scope="row">{user.nome}</th>
                                            <td>{user.telefone}</td>
                                            <td>{user.email}</td>
                                
                                        </tr>
                                    )
                                })}
                    </tbody>
                </table>

            </div>

        </>
    )
}
