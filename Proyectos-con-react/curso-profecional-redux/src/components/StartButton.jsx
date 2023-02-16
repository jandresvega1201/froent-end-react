import React from 'react';
import {Button} from 'antd'
import {StarFilled, StarOutlined} from "@ant-design/icons";
const StartButton = ({isFavorited, onclick}) => {

    const Icon = isFavorited ? StarFilled : StarOutlined

    return (
        <Button icon={<Icon />} onClick={onclick}></Button>
    );
};

export default StartButton;