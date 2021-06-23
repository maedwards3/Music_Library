import React from 'react';

function NavBar() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand">Mike's Music Library</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Add Song</a>
                        </div>
                        <form class="d-flex justify-content-end">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="searchBox" class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;