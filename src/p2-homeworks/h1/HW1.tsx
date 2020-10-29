import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "http://smeshariki-mir.ru/avatars/forum/2D/krosh042.gif",
    name: "Крош",
    message: "Привет!",
    time: "06:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
