import React, { useState } from 'react'
import api from '../../service/api';
import Cep from "react-simple-cep-mask";
import FlashMessage from 'react-flash-message'

import './styles.css';
import { useHistory } from 'react-router-dom';
const Register = () => {

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
    const [success, setSuccess] = useState(false);
    
    const history = useHistory();
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

        console.log(status);
        if (status === 201) {
            setSuccess(true);

            setTimeout(() => {
                history.push('/');
            }, 10000);
        }
    }

    return (
        <>
            <h3 style={{ textAlign: 'center', marginTop: '20px'}}>Dados pessoais</h3>
            <div className="ambiente">
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
                        <div className="mr-2">
                            <label aria-required>RG</label>
                            <input onChange={e => setRg(e.target.value)} value={rg} type="text" className="form-control" placeholder="RG"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label aria-required maxLength="14">CPF</label>
                        <input onChange={e => setCpf(e.target.value)} value={cpf} type="text" className="form-control" placeholder="CPF"/>
                    </div>
                    <div className="form-group">
                        <label aria-required>Sexo</label>
                        <select className="custom-select mr-sm-2" onChange={e => setSexo(e.target.value)}>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label aria-required>CEP</label>
                        <Cep  onBlur={pesquisaCep} onChange={cep => setCep(cep)} value={cep} type="text" className="form-control" placeholder="CEP"/>
                    </div>
                    <div className="form-group">
                        <label aria-required>Logradouro</label>
                        <input onChange={e => setLogradouro(e.target.value)} readOnly value={logradouro} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label aria-required>Bairro</label>
                        <input onChange={e => setBairro(e.target.value)} readOnly value={bairro} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label aria-required>Complemento</label>
                        <input onChange={e => setComplemento(e.target.value)} readOnly value={complemento} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label aria-required>Cidade</label>
                        <input onChange={e => setCidade(e.target.value)} value={cidade} type="text" className="form-control" placeholder="Cidade"/>
                    </div>
                    <div className="form-group">
                        <label aria-required>Estado</label>
                        <input onChange={e => setEstado(e.target.value)} value={estado} type="text" className="form-control" placeholder="Estado"/>
                    </div>
                    <div>
                        <label htmlFor="">Número</label>
                        <input onChange={e => setNumero(e.target.value)} value={numero} type="text" className="form-control" placeholder="Número"/>
                    </div>

                    <div className="center-align">
                        <button id="button-subimit" type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(244,121,32,1)' }}>COMEÇAR!</button>
                    </div>
                </form>
                {success && 
                    <div>
                        <FlashMessage duration={5000} persistOnHover={true}>
                            <p>Cadastro concluído com sucesso!</p>
                        </FlashMessage>
                    </div>
                }
            </div>
        </>
    )
}

export default Register;