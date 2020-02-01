import React, { Fragment } from 'react';
import Header from './Header';
import Nav from './Nav';
import "../stylesheets/user-form.scss";
import "../stylesheets/legacy.scss";
import UserForm from './UserForm';
import BucketList from './BucketList';

function Legacy() {
    return (
        <Fragment>
            <Header />
            <Nav />
            <h1 className="legacy__title">Mi legado</h1>
            <div className="legacyContainer">
                <UserForm />
                <BucketList />
            </div>

        </Fragment>
    );
}
export default Legacy;