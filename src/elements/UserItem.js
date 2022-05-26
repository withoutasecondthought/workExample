import React from 'react';

const UserItem = ({name, username, email}) => {
    return (
        <div className="wrap">
        <div className="wrapPole">
            {name}
        </div>
        <div className="wrapPole">
                {username}
            </div>
            <div className="wrapPole">
                {email}
            </div>
        </div>
    );
};

export default UserItem;