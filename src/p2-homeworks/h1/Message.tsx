import React from "react";
import s from './Message.module.css'

type MessageType = {
    name: string
    message: string
    time: string
    avatar: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <img alt={'foto user'} src={props.avatar}/>
            <div className={s.message__box}>
                <div className={s.message__name}>{props.name}</div>
                <div className={s.message__text}>{props.message}</div>
                <time className={s.message__time}>{props.time}</time>
            </div>
        </div>
    );
}

export default Message;
