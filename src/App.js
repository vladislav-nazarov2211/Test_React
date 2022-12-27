import './App.css';
import { useState } from "react";
import { Timer } from './Timer';

function App() {
  const [list, setList] = useState([])

  function addItem() {
    setList([...list, {
      id: (list.length == 0 ? 0 : list[list.length - 1].id + 1),  // функция добавления записи
      timer: Math.floor(Math.random() * (30 - 10 + 1)) + 10
    }])
  }

  function deleteItem(id) {
    setList(list.filter((item) => {      // функция самостоятельного уадления записи
      return item.id != id
    }))
  }

  return (
      <div className='list'>
        <div className='list__title'>
          Лист исчезновений:
        </div>
        <button onClick={addItem}>Добавить</button>
        <div className='list__items'>
          {list.map((item, index) => {
            return <pre className='item' key={index}>{index + 1}. Исчезнет через  <Timer time={item.timer} id={item.id} deleteItem={deleteItem} /> секунд.</pre>
          })}
        </div>
      </div>
  );
}

export default App;


