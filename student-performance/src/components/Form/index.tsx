import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (

      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione uma novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="cycle">Tempo</label>
          <input
            type="time"
            step="1"
            name="cycle"
            id="cycle"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>
          Adicionar nova tarefa
        </Button>
      </form>
    );
  }
}

export default Form;