import React from 'react';
import api from '../../service/api';

const Edit = ({ funcao, route }) => {

    const Editar = () => {
        funcao ? api.put(`/${funcao}`) : api.put(`/`);
        
    };

    return (
        <div>
            <div>

            <h2>Editar {funcao}</h2>

            <input type="text" value={newname ? newname : name} onChange={e => setNewName(e.target.value)} />
            {' '}
            <input type="email" value={newemail ? newemail : email} onChange={e => setNewEmail(e.target.value)} />
            {' '}
                <button onClick={Cancel}>Cancelar</button>{' '}
                <button onClick={Editar} >Salvar</button>{' '}
                <button onClick={Delete} >Deletar</button>{' '}

            </div>

            {
            redirect && <Redirect to="/" />
            }
        </div>
    )
}

export default Edit;
