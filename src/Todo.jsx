import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; /* 나 폰트어썸 연결해서 가져올게~ */
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; /* 위에 연결했으니까 폰트어썸에서 이거 가져올게~ */
import './assets/styles/reset.css';
import './assets/styles/Todo.css';

function Todo(){
    return (
        <main>
            <input type="text" placeholder='오늘의 할 일을 적어주세요' />
            <button type="button">
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
        </main>
    )
}

export default Todo;