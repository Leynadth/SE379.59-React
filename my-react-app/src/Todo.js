import { Modal } from "./Modal";
import {useState} from "react";


const Todo = () => {
    const [ShowModal, setShowModal ] = useState(false);

    const onDissmissModal = () => {
        setShowModal(false);
    };

    return (
    <>
        <div class="card-content">
        <h2>Learn React</h2>
        <button onClick={() => { setShowModal(true) }} className="btn">Done</button>
    </div>
    {ShowModal && <Modal dismissModal = {onDissmissModal}></Modal>
    }
    </>
    );
}

export default Todo;