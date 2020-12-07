import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : ''

    return (
        <div className={s.container}>
            <div className={s.boxInputButton}>
                <input value={name} onChange={setNameCallback} className={inputClass} placeholder={"Name user"}/>
                <button onClick={addUser}>ADD</button>
            </div>
            <span className={s.spanError}>{error}</span>
            <div className={s.userCounter}>
                <span>Total users: {totalUsers}</span>
            </div>
        </div>
    );
}

export default Greeting;
