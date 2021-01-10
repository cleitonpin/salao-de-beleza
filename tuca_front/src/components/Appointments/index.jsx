import React from 'react';

import './styles.css';

export default function Appointments() {
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
                        <input required type="text" />
                        <label>Nome</label>
                    </div>

                    <div className="input">
                        <input required type="text" />
                        <label>Horário</label>
                    </div>

                    <div className="input">
                        <input required type="text" />
                        <label>Dia da Semana</label>
                    </div>
                </form>
            </div>
        </section>
    );
}
