import React from "react";
import "../css/header-styles.css"
import "../favicon.svg"
class Header extends React.Component{
    render() {
        return <header className="header">
        <div className="header-logo logo">
            <svg width="48" height="48" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.5283 25.8208C32.1462 25.8208 31.5336 25.2868 30.6698 24.533C29.7118 23.7163 28.5182 22.6797 26.2723 22.6797C24.0107 22.6797 22.8327 23.7163 21.8747 24.533C21.0109 25.2868 20.3827 25.8208 19.0006 25.8208C17.6342 25.8208 17.0059 25.2868 16.1421 24.533C15.1841 23.7163 13.9905 22.6797 11.7446 22.6797C9.48295 22.6797 8.28933 23.7163 7.33128 24.533C6.46747 25.2868 5.85494 25.8208 4.47284 25.8208C3.82891 25.8208 3.29492 26.3548 3.29492 26.9987C3.29492 27.6584 3.82891 28.1767 4.47284 28.1767C6.73446 28.1767 7.91236 27.1558 8.8704 26.3234C9.73421 25.5695 10.3625 25.0355 11.7446 25.0355C13.1267 25.0355 13.7392 25.5695 14.603 26.3234C15.561 27.1558 16.7547 28.1767 19.0006 28.1767C21.2622 28.1767 22.4558 27.1558 23.4138 26.3234C24.2776 25.5695 24.8902 25.0355 26.2723 25.0355C27.6387 25.0355 28.2669 25.5695 29.1307 26.3234C30.0888 27.1558 31.2824 28.1767 33.5283 28.1767C34.1722 28.1767 34.7062 27.6584 34.7062 26.9987C34.7062 26.3548 34.1722 25.8208 33.5283 25.8208Z" fill="#141416"/>
                <path d="M33.5283 19.354C32.1462 19.354 31.5336 18.8043 30.6698 18.0662C29.7118 17.2338 28.5182 16.2129 26.2723 16.2129C24.0107 16.2129 22.8327 17.2338 21.8747 18.0662C21.0109 18.8043 20.3827 19.354 19.0006 19.354C17.6342 19.354 17.0059 18.8043 16.1421 18.0662C15.1841 17.2338 13.9905 16.2129 11.7446 16.2129C9.48295 16.2129 8.28933 17.2338 7.33128 18.0662C6.46747 18.8043 5.85494 19.354 4.47284 19.354C3.82891 19.354 3.29492 19.8723 3.29492 20.5319C3.29492 21.1759 3.82891 21.7099 4.47284 21.7099C6.73446 21.7099 7.91236 20.6733 8.8704 19.8409C9.73421 19.1027 10.3625 18.5687 11.7446 18.5687C13.1267 18.5687 13.7392 19.1027 14.603 19.8409C15.561 20.6733 16.7547 21.7099 19.0006 21.7099C21.2622 21.7099 22.4558 20.6733 23.4138 19.8409C24.2776 19.1027 24.8902 18.5687 26.2723 18.5687C27.6387 18.5687 28.2669 19.1027 29.1307 19.8409C30.0888 20.6733 31.2824 21.7099 33.5283 21.7099C34.1722 21.7099 34.7062 21.1759 34.7062 20.5319C34.7062 19.8723 34.1722 19.354 33.5283 19.354Z" fill="#141416"/>
                <path d="M4.47284 15.2704C6.73446 15.2704 7.91236 14.2338 8.8704 13.4171C9.73421 12.6633 10.3625 12.1293 11.7446 12.1293C13.1267 12.1293 13.7392 12.6633 14.603 13.4171C15.561 14.2338 16.7547 15.2704 19.0006 15.2704C21.2622 15.2704 22.4558 14.2338 23.4138 13.4171C24.2776 12.6633 24.8902 12.1293 26.2723 12.1293C27.6387 12.1293 28.2669 12.6633 29.1307 13.4171C30.0888 14.2338 31.2824 15.2704 33.5283 15.2704C34.1722 15.2704 34.7062 14.7364 34.7062 14.0925C34.7062 13.4329 34.1722 12.9146 33.5283 12.9146C32.1462 12.9146 31.5336 12.3806 30.6698 11.6267C29.7118 10.7943 28.5182 9.77344 26.2723 9.77344C24.0107 9.77344 22.8327 10.7943 21.8747 11.6267C21.0109 12.3806 20.3827 12.9146 19.0006 12.9146C17.6342 12.9146 17.0059 12.3806 16.1421 11.6267C15.1841 10.7943 13.9905 9.77344 11.7446 9.77344C9.48295 9.77344 8.28933 10.7943 7.33128 11.6267C6.46747 12.3806 5.85494 12.9146 4.47284 12.9146C3.82891 12.9146 3.29492 13.4329 3.29492 14.0925C3.29492 14.7364 3.82891 15.2704 4.47284 15.2704Z" fill="#141416"/>
            </svg>
        </div>


        <div className="header-search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.94976 17.7296C14.5695 17.7296 18.3146 13.9845 18.3146 9.3648C18.3146 4.74505 14.5695 1 9.94976 1C5.33001 1 1.58496 4.74505 1.58496 9.3648C1.58496 13.9845 5.33001 17.7296 9.94976 17.7296Z" stroke="#9D9D9D" stroke-width="1.79246" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.9248 15.3398L23.0946 22.5097" stroke="#9D9D9D" stroke-width="1.79246" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" className="header-search__input" placeholder="Искать Таланта / Автора"/>
        </div>

        <button className="header-button black-button">
            ДОБАВИТЬ
        </button>
    </header>
    }
}


export default Header