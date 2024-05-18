import React from 'react';

import Profile from "../components/Profile";
import Documents from "../components/Documents";
import {useLocation} from "react-router-dom";
import {DOCUMENTS_ROUTE, HISTORY_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import History from "../components/History";
import Favorites from "../components/Favorites";
import {observer} from "mobx-react-lite";


const UserPage = observer(() => {
    const location = useLocation()
    const isProfile = location.pathname === PROFILE_ROUTE
    const isDocuments = location.pathname === DOCUMENTS_ROUTE
    const isHistory = location.pathname === HISTORY_ROUTE

    return (
        <div>
            {isProfile ?
                <div>
                    <Profile />
                </div>
                : isDocuments ?
                    <div>
                        <Documents />
                    </div>
                    : isHistory ?
                    <div>
                        <History />
                    </div>
                        :
                        <div>
                            <Favorites />
                        </div>
            }
        </div>
    );
});

export default UserPage;
