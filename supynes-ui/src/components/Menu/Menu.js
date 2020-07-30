import React from "react";
import './Menu.css'
import {useTranslation} from "react-i18next";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Secured from "../../components/Secured/Secured";

export default () => {


    const { t } = useTranslation("menu")

    return (
        <div className="menu-container">
            <NavLink
                to="/ItemEntriesMap"
                activeClassName="selected"
            >{t("view in map")}</NavLink>
            |
            <NavLink
                to="/ItemEntries"
                activeClassName="selected"
            >{t("view in list")}</NavLink>
            <Secured>
            |
            <NavLink
                to="/ItemEntryForm"
                activeClassName="selected"
            >{t("create new entry")}</NavLink>
            </Secured>
        </div>
    )
}
